import { Router } from 'express'

import usuarioRoute from './usuarioRoute.js'
import productoRoute from './productoRoute.js'
import carritoRoute from './carritoRoute.js'
import carritoDetalleRoute from './carritoDetalleRoute.js'
import pedidoRoute from './pedidoRoute.js'
import pagoRoute from './pagoRoute.js'
import pedidoDetalleRoute from './pedidoDetalleRoute.js'

const router = Router()

router.use('/usuarios', usuarioRoute)
router.use('/productos', productoRoute)
router.use('/carritos', carritoRoute)
router.use('/carritos-detalles', carritoDetalleRoute)
router.use('/pedidos', pedidoRoute)
router.use('/pedidos-detalles', pedidoDetalleRoute)
router.use('/pagos', pagoRoute)

export default router