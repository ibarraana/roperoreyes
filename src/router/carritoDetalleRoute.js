import { Router } from "express"

import { 
    obtenerCarritosDetalles, 
    obtenerCarritoDetallePorId, 
    crearCarritoDetalle, 
    actualizarCarritoDetalle, 
    eliminarCarritoDetalle 
} from "../controllers/carritoDetalleController.js" 

export const CarritoDetalleRouteo = Router()

CarritoDetalleRouteo.get('/', obtenerCarritosDetalles)
CarritoDetalleRouteo.get('/:id', obtenerCarritoDetallePorId)
CarritoDetalleRouteo.post('/', crearCarritoDetalle)
CarritoDetalleRouteo.put('/:id', actualizarCarritoDetalle)
CarritoDetalleRouteo.delete('/:id', eliminarCarritoDetalle)

