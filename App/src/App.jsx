import { useState } from "react";

import LoginComponent from "./components/usuarios-componentes/login-component"
import RegistroComponent from "./components/usuarios-componentes/registro-component"
import PaginaComponent from "./components/pagina-component"
import ProductoComponent from "./components/productos-componentes/producto-component"
import RegistroProductoComponent from "./components/productos-componentes/registro-producto-component"

import "./App.css";

function App() {
  const [visualizacion, setVisualizacion] = useState("");
  const [esAdministrador, setEsAdministrador] = useState(false);
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  function manejarLoginExitoso(datosUsuario) {
    setUsuarioLogueado(datosUsuario);

    if (datosUsuario.usuario.idRol == 1) {
      setEsAdministrador(true);
    } else {
      setEsAdministrador(false);
    }

    setVisualizacion("pagina");
  }

  function manejarCerrarSesion() {
    setUsuarioLogueado(null);
    setEsAdministrador(false);
    setVisualizacion("");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-lg w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-700">
                ROPA PARA NIÑOS
              </span>
            </div>

            <div className="hidden sm:block sm:ml-6">
              <ul className="flex space-x-4 text-gray-700 font-medium items-center">
                <li>
                  <button onClick={() => setVisualizacion("")} className="hover:text-blue-600 px-3 py-2 rounded-md text-sm cursor-pointer">
                    INICIO
                  </button>
                </li>
                <li>
                  <button onClick={() => setVisualizacion("productos")} className="hover:text-blue-600 px-3 py-2 rounded-md text-sm cursor-pointer">
                    PRODUCTOS
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-4">
              {usuarioLogueado ? (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-full">
                    <span className="text-blue-700">
                      {usuarioLogueado.usuario.nombre}
                    </span>
                  </span>
                  <button onClick={manejarCerrarSesion} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm font-medium cursor-pointer transition-all shadow-md shadow-red-600/10">
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button onClick={() => setVisualizacion("login")} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm font-medium cursor-pointer transition-all">
                    Ingresar
                  </button>
                  <button onClick={() => setVisualizacion("registro")} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium cursor-pointer transition-all">
                    Registrarse
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col justify-center items-center px-4 py-6">
        <div className="bg-white/60 backdrop-blur-xs px-6 py-2 rounded-full shadow-xs mb-4">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Proyecto de Ana Gabriela Ibarra
          </h1>
        </div>

        {visualizacion === "login" && (
          <LoginComponent
            cambiarVisualizacion={() => setVisualizacion("registro")}
            volverAlInicio={() => setVisualizacion("")}
            logueoCambioVisualizacion={manejarLoginExitoso}
          />
        )}

        {visualizacion === "registro" && ( <RegistroComponent cambiarVisualizacion={() => setVisualizacion("")} />)}

        {visualizacion === "pagina" && (<PaginaComponent esAdministrador={esAdministrador} />)}

        {visualizacion === "productos" && <ProductoComponent esAdministrador={esAdministrador} cambiarVisualizacion={() => setVisualizacion("registrar-producto")} />}

        {visualizacion === "registrar-producto" && <RegistroProductoComponent cambiarVisualizacion={() => setVisualizacion("productos")} />}
      </main>
    </div>
  );
}

export default App;
