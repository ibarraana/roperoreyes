import { Router } from "express"

import { 
    obtenerPedidos, 
    obtenerPedidosPorId, 
    crearPedido, 
    actualizarPedido, 
    eliminarPedido 
} from "../controllers/pedidoController.js" 

export const PedidoRouteo = Router()

PedidoRouteo.get('/', obtenerPedidos)
PedidoRouteo.get('/:id', obtenerPedidosPorId)
PedidoRouteo.post('/', crearPedido)
PedidoRouteo.put('/:id', actualizarPedido)
PedidoRouteo.delete('/:id', eliminarPedido)
