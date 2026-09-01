
import LoginComponent from './components/login-component'
import './App.css'

import { getUsuarios, getUsuarioById } from './services/usuarios-services'

function App() {
  


  return (
    <>
      <h1>Proyecto Ana Gabriela Ibarra</h1>

      <LoginComponent />
    </>
  )
}

export default App
