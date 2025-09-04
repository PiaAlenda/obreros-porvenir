import React, { useState, useRef, useEffect } from "react";
import "../../styles/components/EducationalOffer.css";

const EducationalOffer = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const elementsRef = useRef([]);

  const handleClick = (id) => {
    setActiveCard(id);
    setTimeout(() => setActiveCard(null), 400);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            
            let delay = 0;
            if (id !== "header") {
              const index = elementsRef.current.findIndex(
                (el) => el && el.dataset.id === id
              );
              delay = index * 300;
            }

            setTimeout(() => {
              setIsVisible((prev) => ({ ...prev, [id]: true }));
            }, delay);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));

    return () => {
      elementsRef.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section className="oferta-educativa-section">
      <div
        className={`oferta-header ${isVisible["header"] ? "fade-up" : ""}`}
        data-id="header"
        ref={(el) => (elementsRef.current[0] = el)}
      >
        <div className="oferta-header-titles">
          <h2 className={isVisible["header"] ? "fade-up" : ""}>
            Oferta Educativa &gt;
          </h2>
          <p className={isVisible["header"] ? "fade-up" : ""}>
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
          } ${isVisible["bach"] ? "slide-left" : ""}`}
          data-id="bach"
          ref={(el) => (elementsRef.current[1] = el)}
          onClick={() => handleClick("bach")}
        >
          <img
            src="/assets/img/chicaCarpeta.webp"
            alt="Alumna sosteniendo una carpeta amarilla"
            className="card-person-image"
          />
        </a>

        <a
          href="/tecnicaturas"
          className={`oferta-card tecnicaturas ${
            activeCard === "tec" ? "shake" : ""
          } ${isVisible["tec"] ? "slide-right" : ""}`}
          data-id="tec"
          ref={(el) => (elementsRef.current[2] = el)}
          onClick={() => handleClick("tec")}
        >
          <img
            src="/assets/img/chicoCarpeta.webp"
            alt="Alumno haciendo un gesto de OK"
            className="card-person-image"
          />
        </a>
      </div>
    </section>
  );
};

export default EducationalOffer;
