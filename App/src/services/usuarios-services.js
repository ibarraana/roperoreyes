import api from "./index-api"

export async function getUsuarios() {
  try {
    const response = await api.get("/usuarios")
    return response.data
  } catch (error) {
    console.error("Error al obtener los usuarios:", error)
    throw error
  }
}

export async function getUsuarioById(id) {
  try {
    const response = await api.get(`/usuarios/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error al obtener el usuario con ID ${id}:`, error)
    throw error
  } 
}