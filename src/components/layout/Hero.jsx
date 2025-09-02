import { useEffect, useState } from "react";
import "../../styles/components/Hero.css";
import { motion } from "framer-motion";

const sliderItems = [
  { text: "biblioteca", href: "#inscripciones", icon: "/assets/icons/libro.png" },
  { text: "eventos", href: "#universidad", icon: "/assets/icons/calendario.png" },
  { text: "novedades", href: "#asesor", icon: "/assets/icons/diario.png" },
  { text: "presencia territorio", href: "#info", icon: "/assets/icons/ubicacion.png" },
  { text: "biblioteca", href: "#inscripciones", icon: "/assets/icons/libro.png" },
  { text: "eventos", href: "#universidad", icon: "/assets/icons/calendario.png" },
  { text: "novedades", href: "#asesor", icon: "/assets/icons/diario.png" },
  { text: "presencia territorio", href: "#info", icon: "/assets/icons/ubicacion.png" },
  { text: "biblioteca", href: "#inscripciones", icon: "/assets/icons/libro.png" },
  { text: "eventos", href: "#universidad", icon: "/assets/icons/calendario.png" },
  { text: "novedades", href: "#asesor", icon: "/assets/icons/diario.png" },
  { text: "presencia territorio", href: "#info", icon: "/assets/icons/ubicacion.png" },

];

const Hero = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const track = document.querySelector(".slider-track");
    if (track) setWidth(track.scrollWidth / 2);
  }, []);

  return (
    <>
      <section className="hero">
        <video className="hero-video" autoPlay muted loop>
          <source src="/assets/img/videoHero.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>

        <div className="hero-content">
          <h1 className="hero-title">Bienvenidos a Nuestra Escuela</h1>
          <p className="hero-text">
            Ofrecemos programas educativos para mayores de 20 años con enfoque profesional, flexible y moderno.
          </p>
          <div className="hero-buttons">
            <a href="#" className="hero-btn primary-btn">Inscripciones</a>
            <a href="#" className="hero-btn secondary-btn">Conoce la Universidad</a>
          </div>
        </div>
      </section>

      <div className="hero-bottom-slider">
        <motion.div
          className="slider-track"
          animate={{ x: [-width, 0] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
          }}
        >
          {sliderItems.concat(sliderItems).map((item, index) => (
            <a key={index} href={item.href} className="slider-link">
              <img src={item.icon} alt={item.text} className="slider-icon" />
              {item.text}
            </a>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
