import React, { useState } from "react";
import "../../styles/components/EducationalOffer.css";

const EducationalOffer = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleClick = (id) => {
    setActiveCard(id);
    setTimeout(() => setActiveCard(null), 400); 
  };

  return (
    <section className="oferta-educativa-section">
      <div className="oferta-header">
        <div className="oferta-header-titles">
          <h2>Oferta Educativa &gt;</h2>
          <p>
            Bachillerato a Distancia para Jóvenes y Adultos. <br /> Tecnicaturas
            Superiores a Distancia con salida laboral.
          </p>
        </div>
      </div>

      <div className="oferta-cards-container">
        <a
          href="/bachillerato"
          className={`oferta-card bachillerato ${
            activeCard === "bach" ? "shake" : ""
          }`}
          onClick={() => handleClick("bach")}
        >
          <img
            src="/assets/img/chicaCarpeta.jpeg"
            alt="Alumna sosteniendo una carpeta amarilla"
            className="card-person-image"
          />
        </a>

        <a
          href="/tecnicaturas"
          className={`oferta-card tecnicaturas ${
            activeCard === "tec" ? "shake" : ""
          }`}
          onClick={() => handleClick("tec")}
        >
          <div className="card-background card-background-blue"></div>
          <img
            src="/assets/img/chicoCarpeta.jpeg"
            alt="Alumno haciendo un gesto de OK"
            className="card-person-image"
          />
        </a>
      </div>
    </section>
  );
};

export default EducationalOffer;
