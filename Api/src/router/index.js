import { Router } from "express"

import { CarritoRouteo } from "./carritoRoute.js"
import { CarritoDetalleRouteo } from "./carritoDetalleRouter.js"
import { ColorRouteo } from "./colorRouter.js"
import { EstadoPagoRouteo } from "./estadoPagoRouter.js"
import { EstadoRouteo } from "./estadoRouter.js"
import { MetodoPagoRouteo } from "./metodoPagoRouter.js"
import { PagoRouteo } from "./pagoRouter.js"
import { PedidoDetalleRouteo } from "./pedidoDetalleRouter.js"
import { PedidoRouteo } from "./pedidoRouter.js"
import { ProductoRouteo } from "./productoRouter.js"

const ruteo = Router()

ruteo.use('/carritos', CarritoRouteo)
ruteo.use('/carritos-detalles', CarritoDetalleRouteo)
ruteo.use('/colores', ColorRouteo)
ruteo.use('/estados-pagos', EstadoPagoRouteo)
ruteo.use('/estados', EstadoRouteo)
ruteo.use('/metodos-pagos', MetodoPagoRouteo)
ruteo.use('/pagos', PagoRouteo)
ruteo.use('/pedidos-detalles', PedidoDetalleRouteo)
ruteo.use('/pedidos', PedidoRouteo)
ruteo.use('/productos', ProductoRouteo)

export default ruteo