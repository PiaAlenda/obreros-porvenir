import "../../styles/components/StudyAreas.css"

const StudyAreas = () => {
  const areas = [
    { title: "ÁREAS DE ESTUDIO", color: "#666" },
    { title: "ESCUELA UNIVERSITARIA DE SISTEMAS", color: "#666" },
    { title: "CIENCIAS DE LA SALUD", color: "#666" },
    { title: "CIENCIAS ECONÓMICAS Y EMPRESARIALES", color: "#666" },
    { title: "CIENCIAS JURÍDICAS", color: "#666" },
    { title: "CIENCIAS PSICOLÓGICAS", color: "#666" },
    { title: "CIENCIAS SOCIALES Y HUMANAS", color: "#666" },
    { title: "ESCUELA UNIVERSITARIA DE ARQUITECTURA", color: "#666" },
    { title: "VER TODAS LAS ÁREAS", color: "transparent", isViewAll: true },
  ]

  return (
    <section className="study-areas-section">
      <div className="container">
        <h2 className="section-title">ÁREAS DE ESTUDIO</h2>
        <div className="areas-grid">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`area-card ${area.isViewAll ? "view-all-card" : ""}`}
              style={{ backgroundColor: area.color }}
            >
              <h3 className="area-title">{area.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudyAreas
