
import LoginComponent from './components/login-component'
import RegistroComponent from './components/registro-component'

import './App.css'

import { getUsuarios, getUsuarioById } from './services/usuarios-services'

function App() {
  


  return (
    <>
      <h1 className="text-3xl font-semibold text-center mx-auto">Proyecto de Ana Gabriela Ibarra</h1>

      <br />

      <LoginComponent />

      <br /><br />

      <RegistroComponent />
    </>
  )
}

export default App
