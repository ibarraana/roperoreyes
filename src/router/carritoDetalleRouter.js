import { Router } from "express"

import { 
    obtenerCarritosDetalles, 
    obtenerCarritoDetallePorId, 
    crearCarritoDetalle, 
    actualizarCarritoDetalle, 
    eliminarCarritoDetalle 
} from "../controllers/carritoDetalleController.js" 

export const CarritoRouteo = Router()

CarritoRouteo.get('/', obtenerCarritosDetalles)
CarritoRouteo.get('/:id', obtenerCarritoDetallePorId)
CarritoRouteo.post('/', crearCarritoDetalle)
CarritoRouteo.put('/:id', actualizarCarritoDetalle)
CarritoRouteo.delete('/:id', eliminarCarritoDetalle)
