import { useState } from "react";
import { loginUsuario } from "../../services/usuarios-services";

function LoginComponent({
  cambiarVisualizacion,
  logueoCambioVisualizacion,
  volverAlInicio
}) {
  const [datosLogin, setDatosLogin] = useState({
    email: "",
    password: "",
  });

  function enviarInformacion(event) {
    let nombreCampos = event.target.name;
    let valorCampos = event.target.value;

    setDatosLogin({
      ...datosLogin,
      [nombreCampos]: valorCampos,
    });
  }

  function manejarEnvio(event) {
    event.preventDefault();

    loginUsuario(datosLogin)
      .then((response) => {
        console.log("Usuario logueado correctamente:", response);

        logueoCambioVisualizacion(response);
      })
      .catch((error) => {
        console.error("Error al loguear el usuario:", error);
      });
  }

  return (
    <div className="flex justify-center items-center w-full py-10">
      <form
        onSubmit={manejarEnvio}
        className="bg-white/85 backdrop-blur-md rounded-2xl shadow-2xl text-sm text-gray-600 border border-white/40 p-8 py-12 w-80 sm:w-[360px]"
      >
        <p className="text-2xl font-semibold text-center text-gray-800">
          <span className="text-indigo-600">Usuario</span> Login
        </p>

        <div className="mt-6">
          <label className="block font-medium text-gray-700">
            Ingrese el email:
          </label>
          <input
            type="email"
            value={datosLogin.email}
            onChange={enviarInformacion}
            name="email"
            placeholder="Escribir el email aqui..."
            required
            className="border border-gray-200 rounded-lg w-full p-2.5 mt-1 outline-indigo-500 bg-white/70"
          />
        </div>

        <div className="mt-4">
          <label className="block font-medium text-gray-700">
            Ingrese la contraseña:
          </label>
          <input
            type="password"
            value={datosLogin.password}
            onChange={enviarInformacion}
            name="password"
            placeholder="Escribir la contraseña aqui..."
            required
            className="border border-gray-200 rounded-lg w-full p-2.5 mt-1 outline-indigo-500 bg-white/70"
          />
        </div>

        <p className="mt-4 text-center">
          ¿No tienes una cuenta?{" "}
          <button
            type="button"
            className="text-indigo-600 font-medium hover:underline cursor-pointer"
            onClick={cambiarVisualizacion}
          >
            Crear cuenta
          </button>
        </p>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white w-full py-2.5 rounded-lg mt-6 font-medium cursor-pointer shadow-lg shadow-indigo-600/20">
          INGRESAR
        </button>

        <button type="button" className="bg-red-600 hover:bg-red-700 transition-all text-white w-full py-2.5 rounded-lg font-medium cursor-pointer shadow-md shadow-red-600/10" onClick={volverAlInicio}>
            CANCELAR
        </button>
      </form>
    </div>
  );
}

export default LoginComponent;
