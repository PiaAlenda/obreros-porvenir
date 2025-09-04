import { useEffect, useState, useRef } from "react";
import "../../styles/components/Hero.css";
import { motion } from "framer-motion";

const sliderItems = [
  { text: "biblioteca", href: "#inscripciones", icon: "/assets/icons/libro.png" },
  { text: "eventos", href: "#eventos", icon: "/assets/icons/calendario.png" },
  { text: "novedades", href: "#novedades", icon: "/assets/icons/diario.png" },
  { text: "presencia territorio", href: "#location", icon: "/assets/icons/ubicacion.png" },
  { text: "biblioteca", href: "#inscripciones", icon: "/assets/icons/libro.png" },
  { text: "eventos", href: "#eventos", icon: "/assets/icons/calendario.png" },
  { text: "novedades", href: "#novedades", icon: "/assets/icons/diario.png" },
  { text: "presencia territorio", href: "#location", icon: "/assets/icons/ubicacion.png" },
  { text: "biblioteca", href: "#inscripciones", icon: "/assets/icons/libro.png" },
  { text: "eventos", href: "#eventos", icon: "/assets/icons/calendario.png" },
  { text: "novedades", href: "#novedades", icon: "/assets/icons/diario.png" },
  { text: "presencia territorio", href: "#location", icon: "/assets/icons/ubicacion.png" },
];

const Hero = () => {
  const [width, setWidth] = useState(0);

  const [textShown, setTextShown] = useState(false);
  const [buttonsShown, setButtonsShown] = useState(false);

  const contentRef = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const track = document.querySelector(".slider-track");
    if (track) setWidth(track.scrollWidth / 2);
    const t = setTimeout(() => {
      const track2 = document.querySelector(".slider-track");
      if (track2) setWidth(track2.scrollWidth / 2);
    }, 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const el = contentRef.current;
    if (!el || prefersReducedMotion) {
      setTextShown(true);
      setButtonsShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTextShown(true);

            const t1 = setTimeout(() => setButtonsShown(true), 550); 
            timeoutsRef.current.push(t1);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, []);

  const buttonsContainerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0 },
    },
  };
  const buttonVariant = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 0.8, 0.25, 1] } },
    hover: { y: -6, scale: 1.02, transition: { duration: 0.12 } },
  };

  return (
    <>
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/assets/img/videoHero.mp4" type="video/mp4" />
          Tu navegador no soporta video.
        </video>

        <div className="hero-content" ref={contentRef}>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 28 }}
            animate={textShown ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 0.8, 0.25, 1] }}
          >
            Obreros del Porvenir
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 24 }}
            animate={textShown ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.05, ease: [0.22, 0.8, 0.25, 1], delay: 0.08 }}
          >
            Ofrecemos programas educativos para mayores de 20 años con enfoque profesional, flexible y moderno.
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={buttonsContainerVariants}
            initial="hidden"
            animate={buttonsShown ? "show" : "hidden"}
          >
            <motion.a variants={buttonVariant} whileHover="hover" href="#inscripciones" className="hero-btn primary-btn">
              Inscripciones
            </motion.a>

            <motion.a variants={buttonVariant} whileHover="hover" href="#location" className="hero-btn secondary-btn">
              Conoce la Universidad
            </motion.a>
          </motion.div>
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
