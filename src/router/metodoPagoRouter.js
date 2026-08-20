import { Router } from "express"

import { 
    obtenerMetodoPago, 
    obtenerMetodoPagoPorId, 
    crearMetodoPago, 
    actualizarMetodoPago, 
    eliminarMetodoPago 
} from "../controllers/metodoPagoController.js" 

export const MetodoPagoRouteo = Router()

MetodoPagoRouteo.get('/', obtenerMetodoPago)
MetodoPagoRouteo.get('/:id', obtenerMetodoPagoPorId)
MetodoPagoRouteo.post('/', crearMetodoPago)
MetodoPagoRouteo.put('/:id', actualizarMetodoPago)
MetodoPagoRouteo.delete('/:id', eliminarMetodoPago)
