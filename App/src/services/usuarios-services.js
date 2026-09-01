import api from "./index-api"

export async function crearUsuario(usuarioData) {
  try {
    const response = await api.post("/usuarios", usuarioData)
    return response.data
  } catch (error) {
    console.error("Error al crear el usuario:", error)
    throw error
  }
}

export async function loginUsuario(credentials) {
  try {
    const response = await api.post("/usuarios/login", credentials)
    return response.data
  } catch (error) {
    console.error("Error al iniciar sesión:", error)
    throw error
  }
}
