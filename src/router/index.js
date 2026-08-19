import { Router } from "express"

import { CarritoRouteo } from "./carritoRoute.js"

const ruteo = Router()

ruteo.use('/carritos', CarritoRouteo)

export default ruteo