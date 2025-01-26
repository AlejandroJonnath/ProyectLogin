import React, { useState } from "react";
import "./Home.css";

// Importa las imágenes desde la carpeta img
import imagen1 from './img/Adriel.png'; 
import imagen3 from './img/Davilongo.jpg';
import imagen4 from './img/Martin.png';

import LogoInstagram from './img/LogoInstagram.png';
import LogoWasap from './img/LogoWasap.png';
import LogoYoutube from './img/LogoYoutube.png';

export function Home({ nombreUsuario }) {
  // Estado para controlar la visibilidad de la información
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    // Cambia el estado para mostrar o esconder la información
    // Si el índice activo es el mismo que el clicado, lo colapsa; de lo contrario, muestra la nueva información.
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      {/* Cabecera con un menú de navegación */}
      <header>
  <nav>
    <div className="nav-text">
      <ul>
        <li><a href="../Formulario.jsx">Inicio</a></li>
        <li><a href="../Formulario.jsx">Grupo 3</a></li>
        <li><a href="../Formulario.jsx">Proyecto ITQ</a></li>
      </ul>
    </div>
    <div className="nav-icons">
      <ul>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src={LogoInstagram} alt="Instagram" className="icon instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
            <img src={LogoWasap} alt="WhatsApp" className="icon whatsapp" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            <img src={LogoYoutube} alt="YouTube" className="icon youtube" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>

      {/* Sección de bienvenida */}
      <section>
        {/* Mostré el nombre del usuario que accedió como una bienvenida personalizada */}
        <h1 className="tituloBienvenida">Bienvenido, {nombreUsuario}. Nos encanta tenerte de vuelta!</h1>
      </section>

      <main>
        {/* Contenedor de imágenes con información oculta/mostrada al clic */}
        <div className="image-container" onClick={() => handleClick(0)}>
          {/* Primera imagen: Adriel */}
          <img src={imagen1} alt="Imagen 1" />
        </div>
        {/* Información de Adriel: se muestra si activeIndex es 0 */}
        {activeIndex === 0 && (
          <p className="info">
            <strong>Nombre:</strong> Adriel Alejandro Bedoya Suárez<br />
            <strong>Edad:</strong> 20 años<br />
            <strong>Carrera:</strong> Desarrollo en Software<br />
            <strong>Descripción:</strong> Me gusta programar, cocinar y soy un fan de hacer las cosas en orden y de manera responsable.
          </p>
        )}

        <div className="image-container" onClick={() => handleClick(2)}>
          {/* Tercera imagen: David */}
          <img src={imagen3} alt="Imagen 3" />
        </div>
        {/* Información de David: se muestra si activeIndex es 2 */}
        {activeIndex === 2 && (
          <p className="info">
            <strong>Nombre:</strong> David Alejandro Ruiz Carrión<br />
            <strong>Edad:</strong> 19 años<br />
            <strong>Carrera:</strong> Desarrollo en Software<br />
            <strong>Descripción:</strong> Me gusta programar y me gustan las novelas ligeras.
          </p>
        )}

        <div className="image-container" onClick={() => handleClick(3)}>
          {/* Cuarta imagen: Martin */}
          <img src={imagen4} alt="Imagen 4" />
        </div>
        {/* Información de Martin: se muestra si activeIndex es 3 */}
        {activeIndex === 3 && (
          <p className="info">
            <strong>Nombre:</strong> Martin Sebastian Rodríguez Cortez<br />
            <strong>Edad:</strong> 20 años<br />
            <strong>Carrera:</strong> Desarrollo en Software<br />
            <strong>Descripción:</strong> Me gusta el fútbol, los Drilococos, programar páginas web y el Valora
          </p>
        )}
      </main>
    </>
  );
}
