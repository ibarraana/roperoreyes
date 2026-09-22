import api from "./index-api"

export async function extraerProductos() {
  try {
    const response = await api.get("/productos")
    return response.data
  } catch (error) {
    console.error("Error al extraer productos:", error)
    throw error
  }
}

export async function crearProducto(producto) {
  try {
    const response = await api.post("/productos", producto)
    return response.data
  } catch (error) {
    console.error("Error al crear producto:", error)
    throw error
  } 
}
