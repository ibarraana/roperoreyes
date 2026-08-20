import { Router } from "express"

import { 
    obtenerEstado, 
    obtenerEstadoPorId, 
    crearEstado, 
    actualizarEstado, 
    eliminarEstado 
} from "../controllers/estadoController.js" 

export const EstadoRouteo = Router()

EstadoRouteo.get('/', obtenerEstado)
EstadoRouteo.get('/:id', obtenerEstadoPorId)
EstadoRouteo.post('/', crearEstado)
EstadoRouteo.put('/:id', actualizarEstado)
EstadoRouteo.delete('/:id', eliminarEstado)
