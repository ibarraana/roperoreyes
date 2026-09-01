import { useState } from 'react'

import LoginComponent from './components/login-component'
import RegistroComponent from './components/registro-component'
import PaginaComponent from './components/pagina-component'

import './App.css'


function App() {

  const [visualizacion, setVisualizacion] = useState("login")
  


  return (
    <>
      <h1 className="text-3xl font-semibold text-center mx-auto">Proyecto de Ana Gabriela Ibarra</h1>

      <br />

      {/* Aplico el renderizado condicional */}

      {visualizacion == "login" && 
        <LoginComponent cambiarVisualizacion= {() => setVisualizacion("registro")} 
        logueoCambioVisualizacion={() => setVisualizacion("pagina")} />}
      
      {visualizacion == "registro" && 
        <RegistroComponent cambiarVisualizacion= {() => setVisualizacion("login")} />}

      {visualizacion == "pagina" && 
        <PaginaComponent cambiarVisualizacion= {() => setVisualizacion("login")} />}
    </>
  )
}

export default App
