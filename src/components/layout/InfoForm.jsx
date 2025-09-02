"use client"

import { useState } from "react"
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
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="info-form-section">
      <div className="container">
          <h2 className="info-form-title">Este es el comienzo de tu próximo gran logro</h2>
        <div className="info-form-content">
          <div className="form-image">
            <img src="/assets/img/alumnos.png" alt="Estudiantes" />
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

          <div className="form-container">
            <div className="form-header">
              <div className="question-icon">?</div>
              <div className="form-title">
                <h2>
                  ¿NECESITÁS
                  <br />
                  INFORMACIÓN?
                </h2>
                <p>Completá tus datos y un asesor se comunicará en breve para ayudarte.</p>
              </div>
            </div>

            <form className="info-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono celular (Ejemplo: 11 XXXXXXX)"
                value={formData.telefono}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="localidad"
                placeholder="Localidad de residencia"
                value={formData.localidad}
                onChange={handleChange}
              />

              <select name="tipoCarrera" value={formData.tipoCarrera} onChange={handleChange} required>
                <option value="">Tipo de carrera</option>
                <option value="grado">Grado</option>
                <option value="posgrado">Posgrado</option>
                <option value="tecnicatura">Tecnicatura</option>
              </select>

              <select name="carrera" value={formData.carrera} onChange={handleChange} required>
                <option value="">Carrera</option>
                <option value="medicina">Medicina</option>
                <option value="derecho">Derecho</option>
                <option value="psicologia">Psicología</option>
                <option value="administracion">Administración</option>
              </select>

              <select name="modalidad" value={formData.modalidad} onChange={handleChange} required>
                <option value="">Modalidad</option>
                <option value="presencial">Presencial</option>
                <option value="virtual">Virtual</option>
                <option value="hibrida">Híbrida</option>
              </select>

              <div className="captcha-container">
                <input type="checkbox" id="captcha" required />
                <label htmlFor="captcha">No soy un robot</label>
              </div>

              <button type="submit" className="btn-secondary-submit">
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
