import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { database } from "../../firebase/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./home.css";

const beers = [
  { id: 1, name: "IPA Artesanal", description: "Una cerveza con toques cítricos y amargor balanceado.", img: "/home/IPA.jpg" },
  { id: 2, name: "Guinness", description: "Cerveza oscura con notas de café y chocolate.", img: "/home/Guinness.jpg" },
  { id: 3, name: "El Águila", description: "Refrescante y ligera con un sabor suave.", img: "/home/Aguila.jpg" }
];

function Home() {
  const [selectedBeer, setSelectedBeer] = useState(null);
  const [comments, setComments] = useState([]);
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

  // Obtener comentarios de Firebase
  useEffect(() => {
    const commentsRef = ref(database, "coment");
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const commentsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setComments(commentsArray);
      }
    });
  }, []);

  // Rotar comentarios cada 5 segundos
  useEffect(() => {
    if (comments.length > 0) {
      const interval = setInterval(() => {
        setCurrentCommentIndex((prevIndex) => 
          prevIndex === comments.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [comments.length]);

  const closeModal = () => {
    setSelectedBeer(null);
  };

  const [transitionDirection, setTransitionDirection] = useState('right');
  const commentSlideRef = useRef(null);

  const nextComment = () => {
    setTransitionDirection('right');
    setCurrentCommentIndex((prevIndex) => 
      prevIndex === comments.length - 1 ? 0 : prevIndex + 1
    );
    resetAnimation();
  };

  const prevComment = () => {
    setTransitionDirection('left');
    setCurrentCommentIndex((prevIndex) => 
      prevIndex === 0 ? comments.length - 1 : prevIndex - 1
    );
    resetAnimation();
  };

  const resetAnimation = () => {
    if (commentSlideRef.current) {
      commentSlideRef.current.style.animation = 'none';
      void commentSlideRef.current.offsetHeight; // Trigger reflow
      commentSlideRef.current.style.animation = '';
    }
  };

  return (
    <div className="home-container">
      {/* Sección Hero a pantalla completa */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenido a la mejor selección de cervezas</h1>
          <p className="hero-subtitle">Explora una selección exclusiva de cervezas artesanales y comerciales.</p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="main-content">
        <h2 className="section-title">Cervezas Destacadas</h2>
        <div className="beer-list">
          {beers.map((beer) => (
            <div key={beer.id} className="beer-card" onClick={() => setSelectedBeer(beer)}>
              <img src={beer.img} alt={beer.name} className="beer-image" />
              <h3>{beer.name}</h3>
              <p>{beer.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de Cerveza */}
      {selectedBeer && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>✖</button>
            <img src={selectedBeer.img} alt={selectedBeer.name} className="modal-image" />
            <h2>{selectedBeer.name}</h2>
            <p>{selectedBeer.description}</p>
          </div>
        </div>
      )}

      {/* Llamado a la acción */}
      <section className="cta-section">
        <h2 className="cta-title">¿Listo para probar algo nuevo?</h2>
        <Link to="/gallery" className="cta-button">Explora nuestra Galería</Link>
      </section>

      {/* Carrusel de Comentarios */}
      {comments.length > 0 && (
        <section className="comments-carousel">
          <h2 className="comments-title">Lo que dicen nuestros clientes</h2>
          <div className="carousel-container">
            <button className="nav-arrow left-arrow" onClick={prevComment}>
              <FaChevronLeft />
            </button>
            
            <div 
              ref={commentSlideRef}
              className={`comment-slide ${transitionDirection}`}
              key={currentCommentIndex} // Forzar recreación del componente
            >
              <div className="comment-content">
                <p className="comment-text">"{comments[currentCommentIndex].Text}"</p>
                <div className="comment-author">
                  <span className="comment-name">{comments[currentCommentIndex].Name}</span>
                  <span className="comment-rating">
                    {Array.from({ length: comments[currentCommentIndex].Review }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            
            <button className="nav-arrow right-arrow" onClick={nextComment}>
              <FaChevronRight />
            </button>
          </div>
          
          <div className="comment-dots">
            {comments.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentCommentIndex ? 'active' : ''}`}
                onClick={() => {
                  setTransitionDirection(index > currentCommentIndex ? 'right' : 'left');
                  setCurrentCommentIndex(index);
                  resetAnimation();
                }}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Home;