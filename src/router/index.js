import { Router } from "express"

import { ProductoRouteo } from "./productoRoute.js"
import { UsuarioRouteo } from "./usuarioRoute.js"
import { PedidoRouteo } from "./pedidoRoute.js"
import { PedidoDetalleRouteo } from "./pedidoDetalleRoute.js"
import { PagoRouteo } from "./pagoRoute.js"
import { CarritoRouteo } from "./carritoRoute.js"
import { CarritoDetalleRouteo } from "./carritoDetalleRoute.js"

const ruteo = Router()

ruteo.use('/productos', ProductoRouteo)
ruteo.use('/usuarios', UsuarioRouteo)
ruteo.use('/pedidos', PedidoRouteo)
ruteo.use('/pedido-detalles', PedidoDetalleRouteo)
ruteo.use('/pagos', PagoRouteo)
ruteo.use('/carritos', CarritoRouteo)
ruteo.use('/carrito-detalles', CarritoDetalleRouteo)

export default ruteo