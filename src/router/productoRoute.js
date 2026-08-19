import { Router } from "express"

import { 
    obtenerProductos, 
    obtenerProductoPorId, 
    crearProducto, 
    actualizarProducto, 
    eliminarProducto 
} from "../controllers/productoController.js" 

export const ProductoRouteo = Router()

ProductoRouteo.get('/', obtenerProductos)
ProductoRouteo.get('/:id', obtenerProductoPorId)
ProductoRouteo.post('/', crearProducto)
ProductoRouteo.put('/:id', actualizarProducto)
ProductoRouteo.delete('/:id', eliminarProducto)
