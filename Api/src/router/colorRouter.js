import { Router } from "express"

import { 
    obtenerColor, 
    obtenerColorPorId, 
    crearColor, 
    actualizarColor, 
    eliminarColor 
} from "../controllers/colorController.js" 

export const ColorRouteo = Router()

ColorRouteo.get('/', obtenerColor)
ColorRouteo.get('/:id', obtenerColorPorId)
ColorRouteo.post('/', crearColor)
ColorRouteo.put('/:id', actualizarColor)
ColorRouteo.delete('/:id', eliminarColor)
