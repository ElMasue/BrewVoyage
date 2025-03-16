import React from "react";
import "./RssPage.css"; 

function RssPage() {
  return (
    <div className="rss-container">
      <h1>Noticias sobre Cervezas</h1>
      <p>Mantente al día con las últimas noticias y eventos relacionados con el mundo de la cerveza.</p>

      <a
        href="https://www.ideal.es/temas/generales/cerveza/pagina-21.html"
        target="_blank"
        rel="noopener noreferrer"
        className="rss-link"
      >
        Ver noticias en RSS
      </a>
    </div>
  );
}

export default RssPage;