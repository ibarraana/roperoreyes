import { Router } from "express"

import { 
    obtenerEstado, 
    obtenerEstadoPorId, 
    crearEstado, 
    actualizarEstado, 
    eliminarEstado 
} from "../controllers/estadoController.js" 

export const CarritoRouteo = Router()

CarritoRouteo.get('/', obtenerEstado)
CarritoRouteo.get('/:id', obtenerEstadoPorId)
CarritoRouteo.post('/', crearEstado)
CarritoRouteo.put('/:id', actualizarEstado)
CarritoRouteo.delete('/:id', eliminarEstado)
