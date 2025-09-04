import { useState, useEffect, useRef } from "react";
import "../../styles/components/NewsEvents.css";

const NewsEvents = () => {
  const news = [
    {
      image: "/assets/img/bienvenido.webp",
      title: "¡BIENVENIDO UN NUEVO CAPÍTULO PARA LA UNIVERSIDAD!",
      category: "INSTITUCIONAL",
      date: "28 AGOSTO 2024",
      excerpt: "Nueva etapa institucional para nuestra universidad...",
    },
    {
      image: "/assets/img/solidaridad.webp",
      title: "EN EL DÍA NACIONAL DE LA SOLIDARIDAD",
      category: "NOTICIAS",
      date: "26 AGOSTO 2024",
      excerpt: "Participamos activamente en actividades solidarias...",
    },
  ];

  const events = [
    {
      image: "/assets/img/invitacion.webp",
      title: "INVITACIÓN AL EVENTO",
      category: "EVENTOS",
      date: "27 AGOSTO 2024",
      description: "Charla de teletrabajo en tiempos actuales",
    },
    {
      image: "/assets/img/seminario.webp",
      title: '"SEMINARIO 2024"',
      category: "EVENTOS",
      date: "27 AGOSTO 2024",
      description: "Vení a participar del debate desde distintas perspectivas",
    },
  ];

  const [visible, setVisible] = useState({});
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisible((prev) => ({ ...prev, [id]: true }));
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
    <section className="news-events-section">
      <div className="container">
        <div id="novedades" className="news-events-content">
          {/* Noticias */}
          <div className="news-section">
            <h2
              className={`section-title ${
                visible["news-title"] ? "fade-up" : ""
              }`}
              data-id="news-title"
              ref={(el) => (elementsRef.current[0] = el)}
            >
              NOTICIAS Y NOVEDADES
            </h2>
            <div className="news-grid">
              {news.map((item, index) => (
                <article
                  key={index}
                  className={`news-card ${
                    visible[`news-${index}`]
                      ? index % 2 === 0
                        ? "slide-left"
                        : "slide-right"
                      : ""
                  }`}
                  data-id={`news-${index}`}
                  ref={(el) => (elementsRef.current[index + 1] = el)}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="news-image">
                    <img src={item.image || "/placeholder.svg"} alt={item.title} />
                    <div className="news-category">{item.category}</div>
                  </div>
                  <div className="news-content">
                    <h3 className="news-title">{item.title}</h3>
                    <div className="news-date">{item.date}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Eventos */}
          <div id="eventos" className="events-section">
            <h2
              className={`section-title ${
                visible["events-title"] ? "fade-up" : ""
              }`}
              data-id="events-title"
              ref={(el) => (elementsRef.current[news.length + 1] = el)}
            >
              EVENTOS
            </h2>
            <div className="events-list">
              {events.map((event, index) => (
                <article
                  key={index}
                  className={`event-card ${
                    visible[`event-${index}`] ? "fade-up" : ""
                  }`}
                  data-id={`event-${index}`}
                  ref={(el) => (elementsRef.current[news.length + 2 + index] = el)}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="event-image">
                    <img src={event.image || "/placeholder.svg"} alt={event.title} />
                  </div>
                  <div className="event-content">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-category">{event.category}</div>
                    <div className="event-date">{event.date}</div>
                    <p className="event-description">{event.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
