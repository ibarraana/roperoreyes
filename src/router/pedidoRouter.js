import { Router } from "express"

import { 
    obtenerPedido, 
    obtenerPedidoPorId, 
    crearPedido, 
    actualizarPedido, 
    eliminarPedido 
} from "../controllers/pedidoController.js" 

export const CarritoRouteo = Router()

CarritoRouteo.get('/', obtenerPedido)
CarritoRouteo.get('/:id', obtenerPedidoPorId)
CarritoRouteo.post('/', crearPedido)
CarritoRouteo.put('/:id', actualizarPedido)
CarritoRouteo.delete('/:id', eliminarPedido)
