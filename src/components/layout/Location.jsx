import { useState, useEffect, useRef } from "react";
import "../../styles/components/Location.css";

const Location = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);
  const listRefs = useRef([]);

  useEffect(() => {
    const elements = [
      titleRef.current,
      subtitleRef.current,
      videoRef.current,
      ...listRefs.current,
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
        <h2 ref={titleRef} className="scroll-reveal delay-0">Presencia <br />Territorial</h2>
        <h3 ref={subtitleRef} className="scroll-reveal delay-0-5">1 Sede</h3>
        <ul>
          <li ref={addToRefs} className="scroll-reveal delay-1">Escuela Obreros Por Venir</li>
        </ul>

        <a
          href="https://www.google.com/maps/place/Escuela+T%C3%A9cnica+de+Capacitaci%C3%B3n+Laboral+N%C2%B0+917+%22Obreros+del+Porvenir%22/@-31.5412374,-68.534167,17z/data=!3m1!4b1!4m6!3m5!1s0x96814025cfa112c5:0x6a87c5233dab7f3d!8m2!3d-31.541242!4d-68.5315921!16s%2Fg%2F11fy2lrfsf?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="google-map-btn scroll-reveal delay-2"
        >
          Ver Ubicacion
        </a>
      </div>

      <div
        className="location-media full scroll-reveal delay-0-5"
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
