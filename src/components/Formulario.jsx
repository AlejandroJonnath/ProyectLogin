import "./Formulario.css";
import { useState } from "react";
import { Home } from "./Home";

export function Formulario() {
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [logueado, setLogueado] = useState(false); // Estado para controlar la vista

  // Usuarios permitidos
  const usuariosPermitidos = ["Adriel", "Martín", "Bryan", "David"];
  const contraseñaPermitida = "proyectoITQ";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar que los campos no estén vacíos
    if (nombre === "" || contraseña === "") {
      setError(true);
      return;
    }

    // Validar usuario y contraseña
    if (
      usuariosPermitidos.includes(nombre) &&
      contraseña === contraseñaPermitida
    ) {
      setError(false);
      setLogueado(true); // Cambiar la vista al componente Home
    } else {
      setError(true);
    }
  };

  // Si el usuario está logueado, mostrar el componente Home con el nombre
  if (logueado) {
    return <Home nombreUsuario={nombre} />;
  }

  // Si no está logueado, mostrar el formulario
  return (
    <section>
      <h1>Login</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <h5>Usuario</h5>
        <input
          type="text"
          value={nombre}
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <h5>Contraseña</h5>
        <input
          type="password"
          value={contraseña}
          placeholder="Contraseña"
          onChange={(e) => setContraseña(e.target.value)}
        />
        <br />
        <button>Iniciar Sesión</button>
      </form>
      {error && <p style={{ color: "red" }}>Usuario o contraseña incorrectos</p>}
    </section>
  );
}
