import { Router } from "express"

import { 
    obtenerMetodoPago, 
    obtenerMetodoPagoPorId, 
    crearMetodoPago, 
    actualizarMetodoPago, 
    eliminarMetodoPago 
} from "../controllers/metodoPagoController.js" 

export const CarritoRouteo = Router()

CarritoRouteo.get('/', obtenerMetodoPago)
CarritoRouteo.get('/:id', obtenerMetodoPagoPorId)
CarritoRouteo.post('/', crearMetodoPago)
CarritoRouteo.put('/:id', actualizarMetodoPago)
CarritoRouteo.delete('/:id', eliminarMetodoPago)
