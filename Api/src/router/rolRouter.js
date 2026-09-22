import { Router } from "express"

import { 
    obtenerRol, 
    obtenerRolPorId, 
    crearRol, 
    actualizarRol, 
    eliminarRol 
} from "../controllers/rolController.js" 

export const RolRouteo = Router()

RolRouteo.get('/', obtenerRol)
RolRouteo.get('/:id', obtenerRolPorId)
RolRouteo.post('/', crearRol)
RolRouteo.put('/:id', actualizarRol)
RolRouteo.delete('/:id', eliminarRol)
