import { Router } from "express"

import { 
    obtenerEstadoPago, 
    obtenerEstadoPagoPorId, 
    crearEstadoPago, 
    actualizarEstadoPago, 
    eliminarEstadoPago 
} from "../controllers/estadoPagoController.js" 

export const EstadoPagoRouteo = Router()

EstadoPagoRouteo.get('/', obtenerEstadoPago)
EstadoPagoRouteo.get('/:id', obtenerEstadoPagoPorId)
EstadoPagoRouteo.post('/', crearEstadoPago)
EstadoPagoRouteo.put('/:id', actualizarEstadoPago)
EstadoPagoRouteo.delete('/:id', eliminarEstadoPago)
