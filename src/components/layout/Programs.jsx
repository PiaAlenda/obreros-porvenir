import { useState } from "react";
import "../../styles/components/Programs.css";

const courses = [
  { id: 1, image: "/assets/icons/iconos administracion contable.png", ano: "2 Años", title: "Administración Contable", description: "Aprende a gestionar la contabilidad de una empresa, liquidación de..." },
  { id: 2, image: "/assets/icons/iconos computacion.png", ano: "3 Años", title: "Computación", description: "Domina el hardware y software, desde el ensamblaje de PCs...." },
  { id: 3, image: "/assets/icons/iconos dibujo publicitario.png", ano: "4 Años", title: "Dibujo Publicitario", description: "Desarrolla tu creatividad en el diseño gráfico, la ilustración..." },
  { id: 4, image: "/assets/icons/iconos electricidad domiciliaria e industrial.png", ano: "2 Años", title: "Electr. Domiciliaria e Industrial", description: "Capacítate para realizar instalaciones eléctricas..." },
  { id: 5, image: "/assets/icons/iconos electronica general e industrial.png", ano: "3 Años", title: "Electrónica General e Industrial", description: "Explora el mundo de los circuitos, microcontroladores y la..." },
  { id: 6, image: "/assets/icons/iconos gastronomia profecional.png", ano: "5 Años", title: "Gastronomía Profesional", description: "Conviértete en un chef profesional, aprendiendo técnicas culinarias..." },
  { id: 7, image: "/assets/icons/iconos industria de la madera.png", ano: "2 Años", title: "Industria de la Madera", description: "Aprende sobre el diseño, fabricación y acabado de..." },
  { id: 8, image: "/assets/icons/iconos metal mecanica.png", ano: "1 Año", title: "Metal Mecánica", description: "Domina los procesos de soldadura, corte y conformado..." },
  { id: 9, image: "/assets/icons/iconos torneado y lustrado de madera.png", ano: "4 Años", title: "Torneado y Lustrado de Madera", description: "Especialízate en técnicas artesanales de torneado..." },
  { id: 10, image: "/assets/icons/iconos torneria mecanica.png", ano: "3 Años", title: "Tornería Mecánica", description: "Aprende a operar tornos mecánicos para la fabricación..." }
];

const Programs = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCourses = showAll ? courses : courses.slice(0, 4);

  const handleToggle = (event) => {
    event.preventDefault(); 
    setShowAll(!showAll);
  };

  return (
    <section className="course-section">
      <div className="title-container">
        <h2 className="title">Programas Académicos</h2>
      </div>
      <div className="courses-grid">
        {visibleCourses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="card-image-container">
              <span className="card-category-tag">{course.ano}</span>
              <img src={course.image} alt={course.title} />
            </div>
            <div className="card-info-content">
              <div className="card-header">
                <h3 className="card-title">{course.title}</h3>
              </div>
              <p className="card-description">{course.description}</p>
              <div className="card-spacer" />
              <button className="view-course-btn">Inscribirse</button>
              <a href="#" className="card-link">
                Más información<span>&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="toggle-btn-container">
        <button
          className="toggle-btn"
          onClick={handleToggle} 
        >
          {showAll ? "Ver menos ▲" : "Ver más ▼"}
        </button>
      </div>
    </section>
  );
};

export default Programs;