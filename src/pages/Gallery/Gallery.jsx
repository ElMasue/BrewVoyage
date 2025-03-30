import { useState } from "react";
import './gallery.css';
import brands from "../../services/gallery/Gallery";


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