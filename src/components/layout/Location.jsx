import { useState } from "react";
import "../../styles/components/Location.css";

const Location = () => {
  const [isReduced, setIsReduced] = useState(false); // inicia ancho completo

  const handleToggle = () => {
    setIsReduced(!isReduced);
  };

  return (
    <section className="location-container">
      <div className="location-info">
        <h2>Presencia <br />Territorial</h2>
        <h3>1 Sede</h3>
        <ul>
          <li>Escuela Obreros Por Venir</li>
        </ul>

        <a
          href="https://www.google.com/maps/place/Escuela+T%C3%A9cnica+de+Capacitaci%C3%B3n+Laboral+N%C2%B0+917+%22Obreros+del+Porvenir%22/@-31.5412374,-68.534167,17z/data=!3m1!4b1!4m6!3m5!1s0x96814025cfa112c5:0x6a87c5233dab7f3d!8m2!3d-31.541242!4d-68.5315921!16s%2Fg%2F11fy2lrfsf?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="google-map-btn"
        >
          Ver Ubicacion
        </a>
      </div>

      <div
        className={`location-media ${isReduced ? "reduced" : "full"}`}
        onClick={handleToggle}
      >
        <video
          src="/public/assets/img/Location.mp4"
          className="media-preview"
          autoPlay
          loop
          muted
        />
        <div className="overlay">
          {isReduced ? "Haz clic para ampliar" : "Haz clic para reducir"}
        </div>
      </div>
    </section>
  );
};

export default Location;
