import "./Formulario.css"; // Importé los estilos específicos para este formulario.
import { useState } from "react"; // Importé useState para manejar estados dentro del componente.
import { Home } from "./Home"; // Importé el componente Home, que se mostrará cuando el usuario se loguee correctamente.

export function Formulario() {
  // Declaré el estado para el nombre del usuario. Este estado se actualizará a medida que el usuario escriba en el campo.
  const [nombre, setNombre] = useState("");
  // Declaré el estado para la contraseña. Esto permite almacenar el valor ingresado por el usuario en el campo de contraseña.
  const [contraseña, setContraseña] = useState("");
  // Declaré el estado para manejar errores. Lo utilicé para mostrar mensajes si algo sale mal.
  const [error, setError] = useState(false);
  // Declaré el estado para controlar si el usuario está logueado o no. Esto ayuda a cambiar entre el formulario y el componente Home.
  const [logueado, setLogueado] = useState(false);

  // Lista de usuarios permitidos. Definí esto para validar solo ciertos nombres.
  const usuariosPermitidos = ["Adriel", "Martín", "David"];
  // Contraseña única permitida. La utilicé para garantizar un nivel básico de seguridad en el acceso.
  const contraseñaPermitida = "proyectoITQ";

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevení el comportamiento por defecto del formulario para que no recargue la página.

    // Verifiqué si los campos están vacíos. Esto asegura que el usuario complete ambos campos antes de enviar el formulario.
    if (nombre === "" || contraseña === "") {
      setError(true); // Activé el mensaje de error si alguno de los campos está vacío.
      return; // Detuve la ejecución del resto del código si hay un error.
    }

    // Validé si el nombre está en la lista de usuarios permitidos y si la contraseña coincide con la contraseña esperada.
    if (
      usuariosPermitidos.includes(nombre) &&
      contraseña === contraseñaPermitida
    ) {
      setError(false); // Apagué el mensaje de error porque los datos son válidos.
      setLogueado(true); // Cambié el estado para indicar que el usuario está logueado y mostrar la vista de Home.
    } else {
      setError(true); // Activé el mensaje de error si el nombre o la contraseña no coinciden.
    }
  };

  // Verifiqué si el estado "logueado" es verdadero. Si lo es, mostré el componente Home con el nombre del usuario.
  if (logueado) {
    return <Home nombreUsuario={nombre} />;
  }

  // Si el usuario no está logueado, rendericé el formulario.
  return (
    <section>
      <h1>Login</h1>
      {/* Añadí el formulario para que el usuario pueda ingresar sus credenciales. */}
      <form className="formulario" onSubmit={handleSubmit}>
        <h5>Usuario</h5>
        {/* Campo para ingresar el nombre. Vinculé el valor al estado "nombre" y actualicé el estado con cada cambio. */}
        <input
          type="text"
          value={nombre}
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <h5>Contraseña</h5>
        {/* Campo para ingresar la contraseña. Vinculé el valor al estado "contraseña" y actualicé el estado con cada cambio. */}
        <input
          type="password"
          value={contraseña}
          placeholder="Contraseña"
          onChange={(e) => setContraseña(e.target.value)}
        />
        <br />
        {/* Botón para enviar el formulario y ejecutar la función handleSubmit. */}
        <button>Iniciar Sesión</button>
      </form>
      {/* Mostré un mensaje de error si el estado "error" es verdadero. Esto informa al usuario sobre problemas con sus credenciales. */}
      {error && <p style={{ color: "red" }}>Usuario o contraseña incorrectos</p>}
    </section>
  );
}
