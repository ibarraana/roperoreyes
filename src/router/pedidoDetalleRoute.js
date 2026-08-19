import { Router } from "express"

import { 
    obtenerPedidosDetalles, 
    obtenerPedidosDetallesPorId, 
    crearPedidoDetalle, 
    actualizarPedidoDetalle, 
    eliminarPedidoDetalle 
} from "../controllers/pedidoDetalleController.js" 

export const PedidoDetalleRouteo = Router()

PedidoDetalleRouteo.get('/', obtenerPedidosDetalles)
PedidoDetalleRouteo.get('/:id', obtenerPedidosDetallesPorId)
PedidoDetalleRouteo.post('/', crearPedidoDetalle)
PedidoDetalleRouteo.put('/:id', actualizarPedidoDetalle)
PedidoDetalleRouteo.delete('/:id', eliminarPedidoDetalle)
