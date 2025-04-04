import { useState } from "react";
import './gallery.css';

const brands = [
  {
    id: 1,
    name: "Victoria",
    img: "/src/pages/Gallery/images/Victoria.png",
    history: "Victoria es una cerveza española originaria de Málaga, conocida por su sabor suave y su tradición centenaria. Es una de las cervezas más emblemáticas de Andalucía.",
    drinks: [
      "src/pages/Gallery/images/Victoria-1.jpg",
      "src/pages/Gallery/images/Victoria-2.jpg",
      "src/pages/Gallery/images/Victoria-3.jpg"
    ]
  },
  {
    id: 2,
    name: "Cruzcampo",
    img: "src/pages/Gallery/images/Cruzcampo.jpg",
    history: "Cruzcampo es una cerveza andaluza con más de 100 años de historia. Es famosa por su sabor refrescante y su estrecha relación con la cultura española.",
    drinks: [
      "src/pages/Gallery/images/Cruzcampo-1.jpg",
      "src/pages/Gallery/images/Cruzcampo-2.jpg",
      "src/pages/Gallery/images/Cruzcampo-3.jpg"
    ]
  },
  {
    id: 3,
    name: "Alhambra",
    img: "src/pages/Gallery/images/Alhambra.jpg",
    history: "Alhambra es una cerveza artesanal española, elaborada en Granada. Destaca por su calidad y su conexión con el patrimonio cultural andaluz.",
    drinks: [
      "src/pages/Gallery/images/Alhambra-1.jpg",
      "src/pages/Gallery/images/Alhambra-2.jpg",
      "src/pages/Gallery/images/Alhambra-3.jpg"
    ]
  },
  {
    id: 4,
    name: "Estrella Galicia",
    img: "src/pages/Gallery/images/EstrellaGalicia.jpg",
    history: "Estrella Galicia es una cerveza gallega conocida por su sabor único y su proceso de elaboración tradicional. Es una de las marcas más queridas en España.",
    drinks: [
      "src/pages/Gallery/images/EstrellaGalicia-1.jpg",
      "src/pages/Gallery/images/EstrellaGalicia-2.jpg",
      "src/pages/Gallery/images/EstrellaGalicia-3.jpg"
    ]
  },
  {
    id: 5,
    name: "Skol",
    img: "src/pages/Gallery/images/Skol.jpg",
    history: "Skol es una cerveza brasileña con presencia internacional. Es conocida por su sabor ligero y su enfoque en la diversión y el disfrute.",
    drinks: [
      "src/pages/Gallery/images/Skol-1.jpg",
      "src/pages/Gallery/images/Skol-2.jpg",
      "src/pages/Gallery/images/Skol-3.jpg"
    ]
  },
  {
    id: 6,
    name: "Mahou",
    img: "src/pages/Gallery/images/Mahou.jpg",
    history: "Mahou es una cerveza española con más de 130 años de historia. Es una de las marcas más populares en España, reconocida por su calidad y sabor.",
    drinks: [
      "src/pages/Gallery/images/Mahou-1.jpg",
      "src/pages/Gallery/images/Mahou-2.jpg",
      "src/pages/Gallery/images/Mahou-3.jpg"
    ]
  },
  {
    id: 7,
    name: "Heineken",
    img: "src/pages/Gallery/images/Heineken.jpg",
    history: "Heineken es una cerveza holandesa famosa por su sabor suave y su distintivo color verde. Es una de las marcas más reconocidas a nivel mundial.",
    drinks: [
      "src/pages/Gallery/images/Heineken-1.jpg",
      "src/pages/Gallery/images/Heineken-2.jpg",
      "src/pages/Gallery/images/Heineken-3.jpg"
    ]
  },
  {
    id: 8,
    name: "Amstel",
    img: "src/pages/Gallery/images/Amstel.jpg",
    history: "Amstel es una cerveza holandesa conocida por su sabor refrescante y su tradición cervecera. Es muy popular en Europa y otros continentes.",
    drinks: [
      "src/pages/Gallery/images/Amstel-1.jpg",
      "src/pages/Gallery/images/Amstel-2.jpg",
      "src/pages/Gallery/images/Amstel-3.jpg"
    ]
  },
  {
    id: 9,
    name: "San Miguel",
    img: "src/pages/Gallery/images/SanMiguel.jpg",
    history: "San Miguel es una cerveza filipina-española con más de 130 años de historia. Es conocida por su sabor fresco y su presencia internacional.",
    drinks: [
      "src/pages/Gallery/images/SanMiguel-1.jpg",
      "src/pages/Gallery/images/SanMiguel-2.jpg",
      "src/pages/Gallery/images/SanMiguel-3.jpg"
    ]
  }
];
function Gallery() {
  const [selectedBrand, setSelectedBrand] = useState(null);

  const openModal = (brand) => {
    setSelectedBrand(brand);
  };

  const closeModal = () => {
    setSelectedBrand(null);
  };

  return (
    <div className="gallery-container">
      {/* Título de la galería */}
      <h1 className="gallery-title">Galería de Marcas</h1>

      {/* Lista de marcas */}
      <div className="brand-list">
        {brands.map(brand => (
          <div key={brand.id} className="brand-card" onClick={() => openModal(brand)}>
            <img src={brand.img} alt={brand.name} className="brand-image" />
            <h2 className="brand-name">{brand.name}</h2>
          </div>
        ))}
      </div>

      {/* Modal de la marca */}
      {selectedBrand && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>✖</button>

            {/* Contenido del modal */}
            <div className="modal-body">
              {/* Imagen de la marca a la izquierda */}
              <div className="modal-left">
                <img src={selectedBrand.img} alt={selectedBrand.name} className="modal-brand-image" />
              </div>

              {/* Historia de la marca a la derecha */}
              <div className="modal-right">
                <h2 className="modal-brand-name">{selectedBrand.name}</h2>
                <p className="modal-brand-history">{selectedBrand.history}</p>
              </div>
            </div>

            {/* Fotos de bebidas de la marca debajo */}
            <div className="modal-drinks">
              {selectedBrand.drinks.map((drink, index) => (
                <img key={index} src={drink} alt={`Bebida ${index + 1}`} className="modal-drink-image" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;