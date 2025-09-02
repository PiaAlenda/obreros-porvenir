import "../../styles/components/NewsEvents.css"

const NewsEvents = () => {
  const news = [
    {
      image: "/assets/img/bienvenido.png",
      title: "¡BIENVENIDO UN NUEVO CAPÍTULO PARA LA UNIVERSIDAD!",
      category: "INSTITUCIONAL",
      date: "28 AGOSTO 2024",
      excerpt: "Nueva etapa institucional para nuestra universidad...",
    },
    {
      image: "/assets/img/solidaridad.png",
      title: "EN EL DÍA NACIONAL DE LA SOLIDARIDAD",
      category: "NOTICIAS",
      date: "26 AGOSTO 2024",
      excerpt: "Participamos activamente en actividades solidarias...",
    },
  ]

  const events = [
    {
      image: "/assets/img/invitacion.png",
      title: "INVITACIÓN AL EVENTO",
      category: "EVENTOS",
      date: "27 AGOSTO 2024",
      description: "Charla de teletrabajo en tiempos actuales",
    },
    {
      image: "/assets/img/seminario.png",
      title: '"SEMINARIO 2024"',
      category: "EVENTOS",
      date: "27 AGOSTO 2024",
      description: "Vení a participar del debate desde distintas perspectivas",
    },
  ]

  return (
    <section className="news-events-section">
      <div className="container">
        <div className="news-events-content">
          <div className="news-section">
            <h2 className="section-title">NOTICIAS Y NOVEDADES</h2>
            <div className="news-grid">
              {news.map((item, index) => (
                <article key={index} className="news-card">
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

          <div className="events-section">
            <h2 className="section-title">EVENTOS</h2>
            <div className="events-list">
              {events.map((event, index) => (
                <article key={index} className="event-card">
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
  )
}

export default NewsEvents
