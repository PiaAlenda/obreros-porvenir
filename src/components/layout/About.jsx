import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../../styles/components/About.css';

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); 

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const animateCount = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        const currentCount = Math.min(progress, 1) * end;
        setCount(Math.floor(currentCount));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
};

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-intro">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-title"
        >
          Nuestra Esencia
        </motion.h2>
      </div>

      <div className="about-grid">
        <motion.div
          className="grid-item image-item"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <img src="/public/assets/img/about.png" alt="Aula moderna de la escuela" className="about-image" />
        </motion.div>

        <motion.div
          className="grid-item counter-item"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="underline-animate underline-animate--fast"  style={{ color: '#800c0a' }}>Impulsando el Mañana</h3>

            <p>
                Fundada en 1915, nuestra institución cuenta con más de 100 años de trayectoria, destacándose por la calidad educativa, 
                el profesionalismo docente y talleres equipados que preparan a los egresados para sobresalir en el oficio elegido.
            </p>

          <div className="counter-container">
            <div className="counter-box">
              <span className="counter-number"><AnimatedCounter end={350} />+</span>
              <p className="counter-label">Alumnos</p>
            </div>
            <div className="counter-box">
              <span className="counter-number"><AnimatedCounter end={12} /></span>
              <p className="counter-label">Especialidades</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid-item text-item"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="underline-animate underline-animate--slow" style={{ color: '#800c0a' }}>Por que elegirnos?</h3>
          <p>
            Nuestra Escuela tiene una larga trayectoria ofreciendo carreras cortas y cursos de especialización con una rápida salida laboral.
            Esto, sumado al rol social de la misma, le dan acceso a capacitarse a personas de todas las edades y posibilidades económicas.
          </p>
            <div className="counter-container">
            <div className="counter-box">
              <span className="counter-number"><AnimatedCounter end={30} /></span>
              <p className="counter-label">Aulas/Talleres</p>
            </div>
            <div className="counter-box">
              <span className="counter-number"><AnimatedCounter end={38} />+</span>
              <p className="counter-label">Profesores</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid-item image-item"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <img src="/public/assets/img/about.png" alt="Estudiantes interactuando en la escuela" className="about-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;