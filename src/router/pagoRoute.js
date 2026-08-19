import { Router } from "express"

import { 
    obtenerPagos, 
    obtenerPagoPorId, 
    crearPago, 
    actualizarPago, 
    eliminarPago 
} from "../controllers/pagoController.js" 

export const PagoRouteo = Router()

PagoRouteo.get('/', obtenerPagos)
PagoRouteo.get('/:id', obtenerPagoPorId)
PagoRouteo.post('/', crearPago)
PagoRouteo.put('/:id', actualizarPago)
PagoRouteo.delete('/:id', eliminarPago)
