import './cookies.css';

function Cookies() {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Política de Privacidad y Cookies</h1>

      <section className="privacy-policy-section">
        <h2>1. Introducción</h2>
        <p>
          En nuestra empresa, nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política explica cómo recopilamos, usamos y protegemos tu información personal cuando visitas nuestro sitio web.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>2. Información que recopilamos</h2>
        <p>
          Recopilamos información personal que nos proporcionas directamente, como tu nombre, dirección de correo electrónico y cualquier otro dato que nos envíes a través de formularios de contacto.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>3. Uso de la información</h2>
        <p>
          Utilizamos la información recopilada para mejorar nuestros servicios, responder a tus consultas y enviarte actualizaciones sobre nuestros productos y promociones, siempre que nos hayas dado tu consentimiento.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>4. Cookies</h2>
        <p>
          Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo y nos ayudan a recordar tus preferencias y a analizar el tráfico del sitio.
        </p>
        <p>
          Puedes gestionar o desactivar las cookies desde la configuración de tu navegador, pero ten en cuenta que algunas funciones del sitio podrían no funcionar correctamente.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>5. Tus derechos</h2>
        <p>
          Tienes derecho a acceder, rectificar o eliminar tus datos personales en cualquier momento. Para ejercer estos derechos, puedes contactarnos a través de nuestro formulario de contacto.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>6. Cambios en esta política</h2>
        <p>
          Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te recomendamos revisarla periódicamente para estar al tanto de cualquier cambio.
        </p>
      </section>
    </div>
  );
}

export default Cookies;