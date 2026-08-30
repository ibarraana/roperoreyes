import { Router } from "express"

import { 
    obtenerPago, 
    obtenerPagoPorId, 
    crearPago, 
    actualizarPago, 
    eliminarPago 
} from "../controllers/pagoController.js" 

export const PagoRouteo = Router()

PagoRouteo.get('/', obtenerPago)
PagoRouteo.get('/:id', obtenerPagoPorId)
PagoRouteo.post('/', crearPago)
PagoRouteo.put('/:id', actualizarPago)
PagoRouteo.delete('/:id', eliminarPago)
