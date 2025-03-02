import { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const beers = [
  { id: 1, name: "IPA Artesanal", description: "Una cerveza con toques cítricos y amargor balanceado.", img: "src/pages/home/images/IPA.jpg" },
  { id: 2, name: "Guinness", description: "Cerveza oscura con notas de café y chocolate.", img: "src/pages/home/images/Guinness.jpg" },
  { id: 3, name: "El Águila", description: "Refrescante y ligera con un sabor suave.", img: "src/pages/home/images/Aguila.jpg" }
];

function Home() {
  const [selectedBeer, setSelectedBeer] = useState(null);

  const closeModal = () => {
    setSelectedBeer(null);
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
    </div>
  );
}

export default Home;
