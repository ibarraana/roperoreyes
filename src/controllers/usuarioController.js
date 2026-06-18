import Usuario from '../models/Usuario.js'

export const getUsuarios = async (req, res) => {

  const usuarios = await Usuario.findAll()

  res.json(usuarios)

}

export const createUsuario = async (req, res) => {

  const usuario = await Usuario.create(req.body)

  res.status(201).json(usuario)

}