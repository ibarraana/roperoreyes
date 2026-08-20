import { Router } from "express"

import { 
    obtenerEstadoPago, 
    obtenerEstadoPagoPorId, 
    crearEstadoPago, 
    actualizarEstadoPago, 
    eliminarEstadoPago 
} from "../controllers/estadoPagoController.js" 

export const CarritoRouteo = Router()

CarritoRouteo.get('/', obtenerEstadoPago)
CarritoRouteo.get('/:id', obtenerEstadoPagoPorId)
CarritoRouteo.post('/', crearEstadoPago)
CarritoRouteo.put('/:id', actualizarEstadoPago)
CarritoRouteo.delete('/:id', eliminarEstadoPago)
