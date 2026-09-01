
import LoginComponent from './components/login-component'
import RegistroComponent from './components/registro-component'

import './App.css'

import { getUsuarios, getUsuarioById } from './services/usuarios-services'

function App() {
  


  return (
    <>
      <h1>Proyecto Ana Gabriela Ibarra</h1>

      <br />

      <LoginComponent />

      <br /><br />
      Si no cuenta con usuario, entonces debe registrarse en el siguiente formulario:
      <br />

      <RegistroComponent />
    </>
  )
}

export default App
