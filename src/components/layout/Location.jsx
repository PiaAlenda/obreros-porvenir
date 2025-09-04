import { useEffect, useRef } from "react";
import "../../styles/components/Location.css";

const Location = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);
  const listRefs = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const elements = [
      titleRef.current,
      subtitleRef.current,
      videoRef.current,
      ...listRefs.current,
      buttonRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => el && observer.observe(el));
  }, []);

  const addToRefs = (el) => {
    if (el && !listRefs.current.includes(el)) {
      listRefs.current.push(el);
    }
  };

  return (
    <section id="location" className="location-container">
      <div className="location-info">
        <h2 ref={titleRef} className="scroll-reveal delay-0">
          Presencia <br /> Territorial
        </h2>
        <h3 ref={subtitleRef} className="scroll-reveal delay-0-5">1 Sede</h3>
        <ul>
          <li ref={addToRefs} className="scroll-reveal delay-1">
            Escuela Obreros Por Venir
          </li>
        </ul>

        <a
          href="https://www.google.com/maps/place/Escuela+T%C3%A9cnica+de+Capacitaci%C3%B3n+Laboral+N%C2%B0+917+%22Obreros+del+Porvenir%22/@-31.5412374,-68.534167,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="google-map-btn scroll-reveal delay-2"
          ref={buttonRef}
        >
          Ver Ubicación
        </a>
      </div>
      <div
        className="location-media scroll-reveal delay-0-5"
        ref={videoRef}
      >
        <video
          src="/assets/img/Location.mp4"
          className="media-preview"
          autoPlay
          loop
          muted
        />
      </div>
    </section>
  );
};

export default Location;
