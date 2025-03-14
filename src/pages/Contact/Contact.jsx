import { useState } from "react";
import './contact.css';
import Maps from '../../components/maps/Maps'; // Importa el componente Maps

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">¡Contacte con nosotros!</h1>
        <p className="contact-description">
          ¿Tienes alguna pregunta, sugerencia o comentario? ¡No dudes en contactarnos!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">Enviar</button>
        </form>

        {/* Usa el componente Maps aquí */}
        <h1 className="contact-title">¡Donde encontrarnos!</h1>
        <Maps />
      </div>
    </>
  );
}

export default Contact;