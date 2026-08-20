import { Router } from "express"

import { 
    obtenerPago, 
    obtenerPagoPorId, 
    crearPago, 
    actualizarPago, 
    eliminarPago 
} from "../controllers/pagoController.js" 

export const CarritoRouteo = Router()

CarritoRouteo.get('/', obtenerPago)
CarritoRouteo.get('/:id', obtenerPagoPorId)
CarritoRouteo.post('/', crearPago)
CarritoRouteo.put('/:id', actualizarPago)
CarritoRouteo.delete('/:id', eliminarPago)
