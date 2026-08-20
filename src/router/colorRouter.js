import { Router } from "express"

import { 
    obtenerColor, 
    obtenerColorPorId, 
    crearColor, 
    actualizarColor, 
    eliminarColor 
} from "../controllers/colorController.js" 

export const CarritoRouteo = Router()

CarritoRouteo.get('/', obtenerColor)
CarritoRouteo.get('/:id', obtenerColorPorId)
CarritoRouteo.post('/', crearColor)
CarritoRouteo.put('/:id', actualizarColor)
CarritoRouteo.delete('/:id', eliminarColor)
