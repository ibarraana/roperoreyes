import { Router } from "express"

import { 
    obtenerPedidoDetalle, 
    obtenerPedidoDetallePorId, 
    crearPedidoDetalle, 
    actualizarPedidoDetalle, 
    eliminarPedidoDetalle 
} from "../controllers/pedidoDetalleController.js" 

export const PedidoDetalleRouteo = Router()

PedidoDetalleRouteo.get('/', obtenerPedidoDetalle)
PedidoDetalleRouteo.get('/:id', obtenerPedidoDetallePorId)
PedidoDetalleRouteo.post('/', crearPedidoDetalle)
PedidoDetalleRouteo.put('/:id', actualizarPedidoDetalle)
PedidoDetalleRouteo.delete('/:id', eliminarPedidoDetalle)
