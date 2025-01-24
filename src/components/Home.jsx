import React, { useState } from "react";
import "./Home.css";

// Importa las imágenes desde la carpeta img
import imagen1 from './img/Adriel.png'; 
import imagen2 from './img/Bryan.png'; 
import imagen3 from './img/David.png';
import imagen4 from './img/Martin.png';

export function Home({ nombreUsuario }) {
  // Estado para controlar la visibilidad de la información
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    // Cambia el estado para mostrar o esconder la información
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="../Formulario.jsx">Inicio</a>
            </li>
            <li>
              <a href="#sobre">Grupo 3</a>
            </li>
            <li>
              <a href="#contacto">Proyecto ITQ</a>
            </li>
          </ul>
        </nav>
      </header>

      <section>
        <h1 className="tituloBienvenida">Bienvenido, {nombreUsuario}!</h1>
      </section>

      <main>
        {/* Imágenes con los contenedores */}
        <div className="image-container" onClick={() => handleClick(0)}>
          <img src={imagen1} alt="Imagen 1" />
        </div>
        {activeIndex === 0 && (
          <p className="info">
            <strong>Nombre:</strong> Adriel Alejandro Bedoya Suárez<br />
            <strong>Edad:</strong> 19 años<br />
            <strong>Carrera:</strong> Desarrollo en Software<br />
            <strong>Descripción:</strong> Me gusta programar, cocinar y soy un fan de hacer las cosas en orden y de manera responsable.
          </p>
        )}

        <div className="image-container" onClick={() => handleClick(1)}>
          <img src={imagen2} alt="Imagen 2" />
        </div>
        {activeIndex === 1 && (
          <p className="info">
            <strong>Nombre:</strong> Bryan Antamba<br />
            <strong>Edad:</strong> 22 años<br />
            <strong>Carrera:</strong> Desarrollo en Software<br />
            <strong>Descripción:</strong> Soy el asesino de notas y el Jesús de las redes.
          </p>
        )}

        <div className="image-container" onClick={() => handleClick(2)}>
          <img src={imagen3} alt="Imagen 3" />
        </div>
        {activeIndex === 2 && (
          <p className="info">
            <strong>Nombre:</strong> David Alejandro Ruiz Carrión<br />
            <strong>Edad:</strong> 19 años<br />
            <strong>Carrera:</strong> Desarrollo en Software<br />
            <strong>Descripción:</strong> Me gusta programar y me gustan las novelas ligeras.
          </p>
        )}

        <div className="image-container" onClick={() => handleClick(3)}>
          <img src={imagen4} alt="Imagen 4" />
        </div>
        {activeIndex === 3 && (
          <p className="info">
            <strong>Nombre:</strong> Martin Rodriguez<br />
            <strong>Edad:</strong> 21 años<br />
            <strong>Carrera:</strong> Desarrollo en Software<br />
            <strong>Descripción:</strong> Me gusta el fútbol, los Drilococos, programar páginas web y el Valorant.
          </p>
        )}
      </main>
  </>
 );
}