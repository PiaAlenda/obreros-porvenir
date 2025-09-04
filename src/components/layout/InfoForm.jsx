"use client"

import { useState, useEffect, useRef } from "react"
import "../../styles/components/InfoForm.css"

const InfoForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    tipoCarrera: "",
    carrera: "",
    modalidad: "",
    localidad: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const titleRef = useRef(null)
  const formRef = useRef(null)
  const imgRef = useRef(null)
  const inputsRef = useRef([])

  useEffect(() => {
    const allElements = [
      titleRef.current,
      formRef.current,
      imgRef.current,
      ...inputsRef.current
    ].filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    allElements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <section className="info-form-section">
      <div id="inscripciones" className="container">
        <h2 ref={titleRef} className="info-form-title scroll-reveal delay-0">
          Este es el comienzo de tu próximo gran logro
        </h2>

        <div className="info-form-content">
          <div className="form-image scroll-reveal delay-2" ref={imgRef}>
            <img src="/assets/img/alumnos.webp" alt="Estudiantes" />
            <div className="recognition-badge">
              <div className="footer-logo">
                <img src="/assets/icons/LOGO ESCUELA.png" alt="Obreros del Provenir" />
              </div>
              <div className="recognition-text">
                <strong>
                  Reconocimiento de
                  <br />
                  materias
                </strong>
              </div>
            </div>
          </div>

          <div className="form-container scroll-reveal delay-1" ref={formRef}>
            <div className="form-header">
              <div className="question-icon">?</div>
              <div className="form-title">
                <h2>¿NECESITÁS<br/>INFORMACIÓN?</h2>
                <p>Completá tus datos y un asesor se comunicará en breve para ayudarte.</p>
              </div>
            </div>

            <form className="info-form" onSubmit={handleSubmit}>
              <div className="form-row">
                {["nombre","apellido"].map((name, idx) => (
                  <input
                    key={name}
                    type="text"
                    name={name}
                    placeholder={name === "nombre" ? "Nombre" : "Apellido"}
                    value={formData[name]}
                    onChange={handleChange}
                    ref={(el) => (inputsRef.current[idx] = el)}
                    required
                  />
                ))}
              </div>

              {["email","telefono","localidad"].map((name, idx) => (
                <input
                  key={name}
                  type={name === "email" ? "email" : "text"}
                  name={name}
                  placeholder={
                    name === "email"
                      ? "Email"
                      : name === "telefono"
                      ? "Teléfono celular (Ejemplo: 11 XXXXXXX)"
                      : "Localidad de residencia"
                  }
                  value={formData[name]}
                  onChange={handleChange}
                  ref={(el) => (inputsRef.current[idx+2] = el)}
                  required={name!=="localidad"}
                />
              ))}

              {[
                { name: "tipoCarrera", options: ["Grado","Posgrado","Tecnicatura"] },
                { name: "carrera", options: ["Medicina","Derecho","Psicología","Administración"] },
                { name: "modalidad", options: ["Presencial","Virtual","Híbrida"] }
              ].map((select, idx) => (
                <select
                  key={select.name}
                  name={select.name}
                  value={formData[select.name]}
                  onChange={handleChange}
                  ref={(el) => (inputsRef.current[idx+5] = el)}
                  required
                >
                  <option value="">{select.name === "modalidad" ? "Modalidad" : select.name === "tipoCarrera" ? "Tipo de carrera" : "Carrera"}</option>
                  {select.options.map(opt => (
                    <option key={opt.toLowerCase()} value={opt.toLowerCase()}>{opt}</option>
                  ))}
                </select>
              ))}
    
                 {/*captcha
                <div className="captcha-container" ref={(el) => (inputsRef.current[8]=el)}>
                <input type="checkbox" id="captcha" required />
                <label htmlFor="captcha">No soy un robot</label>
              </div> */}

              <button type="submit" className="btn-secondary-submit" ref={(el) => (inputsRef.current[9]=el)}>
                SOLICITAR INFORMACIÓN
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoForm
