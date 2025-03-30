import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./RssPage.css";

function RssPage() {
  const location = useLocation();
  const [feed, setFeed] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Cargar y parsear el feed XML
    const fetchFeed = async () => {
      try {
        const response = await fetch('/feed.xml');
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        
        const items = Array.from(xmlDoc.querySelectorAll('item')).map(item => ({
          id: item.querySelector('id').textContent,
          title: item.querySelector('title').textContent,
          description: item.querySelector('description').textContent,
          date: new Date(item.querySelector('pubDate').textContent)
        }));
        
        setFeed(items);
      } catch (error) {
        console.error("Error loading RSS feed:", error);
      }
    };

    fetchFeed();
  }, []);

  useEffect(() => {
    // Manejar cambios en el hash
    if (feed && location.hash) {
      const itemId = location.hash.substring(1); // Eliminar el #
      const item = feed.find(item => item.id === itemId);
      setSelectedItem(item);
    } else {
      setSelectedItem(null);
    }
  }, [location.hash, feed]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="rss-container">
      <h1>Noticias sobre Cervezas</h1>
      
      {selectedItem ? (
        <div className="rss-detail">
          <button onClick={() => { window.location.hash = ''; scrollToTop(); }} className="back-button">
            ← Volver al listado
          </button>
          <h2>{selectedItem.title}</h2>
          <p className="rss-date">{selectedItem.date.toLocaleDateString()}</p>
          <p className="rss-description">{selectedItem.description}</p>
        </div>
      ) : (
        <>
          <div className="rss-feed">
            {feed?.map(item => (
              <div 
                key={item.id} 
                id={`item-${item.id}`}
                className="rss-item"
              >
                <h2>
                  <a href={`#${item.id}`} className="item-link">
                    {item.title}
                  </a>
                </h2>
                <p className="rss-date">{item.date.toLocaleDateString()}</p>
                <p className="rss-description">{item.description}</p>
                <a href={`#${item.id}`} className="read-more">Leer más</a>
              </div>
            ))}
          </div>
          
          <div className="rss-link-container">
            <a
              href="/feed.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="rss-link"
            >
              Suscríbete al feed RSS
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default RssPage;