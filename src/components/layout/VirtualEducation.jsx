import React from "react";
import "../../styles/components/VirtualEducation.css"


const row1Images = [
  "/src/assets/img/bienvenido.png",
  "/src/assets/img/ChicaCarpeta.jpeg",
  "/src/assets/img/ChicoCarpeta.jpeg",
  "/src/assets/img/invitacion.png",
  "/src/assets/img/seminario.png",
  "/src/assets/img/solidaridad.png",
  "/src/assets/img/bienvenido.png",
  "/src/assets/img/ChicaCarpeta.jpeg",
  "/src/assets/img/ChicoCarpeta.jpeg",
];

const row2Images = [
  "/src/assets/img/invitacion.png",
  "/src/assets/img/seminario.png",
  "/src/assets/img/solidaridad.png",
   "/src/assets/img/bienvenido.png",
  "/src/assets/img/ChicaCarpeta.jpeg",
  "/src/assets/img/ChicoCarpeta.jpeg",
    "/src/assets/img/invitacion.png",
  "/src/assets/img/seminario.png",
  "/src/assets/img/solidaridad.png",
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Mi Galería</h2>

      <div className="gallery-row marquee">
        {row1Images.concat(row1Images).map((src, i) => (
          <div
            key={i}
            className="gallery-item"
            style={{ marginTop: i % 2 === 0 ? "0px" : "20px" }}
          >
            <img src={src} alt={`Imagen ${i}`} />
          </div>
        ))}
      </div>

      <div className="gallery-row marquee reverse">
        {row2Images.concat(row2Images).map((src, i) => (
          <div
            key={i}
            className="gallery-item"
            style={{ marginTop: i % 2 === 0 ? "20px" : "0px" }}
          >
            <img src={src} alt={`Imagen ${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
