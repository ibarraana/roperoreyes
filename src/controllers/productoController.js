import Producto from '../models/Producto.js'

export const getProductos = async (req, res) => {

  const productos = await Producto.findAll()

  res.json(productos)

}

export const createProducto = async (req, res) => {

  const producto = await Producto.create(req.body)

  res.status(201).json(producto)

}