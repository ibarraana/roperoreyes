import { Router } from "express"

import { 
    obtenerUsuarios, 
    obtenerUsuarioPorId, 
    crearUsuario, 
    actualizarUsuario, 
    eliminarUsuario,
    loginUsuario
} from "../controllers/usuarioController.js" 

export const UsuarioRouteo = Router()

UsuarioRouteo.get('/', obtenerUsuarios)
UsuarioRouteo.get('/:id', obtenerUsuarioPorId)
UsuarioRouteo.post('/', crearUsuario)
UsuarioRouteo.put('/:id', actualizarUsuario)
UsuarioRouteo.delete('/:id', eliminarUsuario)
UsuarioRouteo.post('/login', loginUsuario)
