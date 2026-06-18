import Carrito from '../models/Carrito.js'

export const getCarritos = async (req, res) => {
  try {
    const carritos = await Carrito.findAll()

    res.status(200).json(carritos)

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    })

  }
}

export const getCarritoById = async (req, res) => {
  try {

    const carrito = await Carrito.findByPk(req.params.id)

    if (!carrito) {
      return res.status(404).json({
        mensaje: 'Carrito no encontrado'
      })
    }

    res.json(carrito)

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    })

  }
}

export const createCarrito = async (req, res) => {
  try {

    const carrito = await Carrito.create(req.body)

    res.status(201).json(carrito)

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    })

  }
}

export const updateCarrito = async (req, res) => {
  try {

    const carrito = await Carrito.findByPk(req.params.id)

    if (!carrito) {
      return res.status(404).json({
        mensaje: 'Carrito no encontrado'
      })
    }

    await carrito.update(req.body)

    res.json(carrito)

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    })

  }
}

export const deleteCarrito = async (req, res) => {
  try {

    const carrito = await Carrito.findByPk(req.params.id)

    if (!carrito) {
      return res.status(404).json({
        mensaje: 'Carrito no encontrado'
      })
    }

    await carrito.destroy()

    res.json({
      mensaje: 'Carrito eliminado'
    })

  } catch (error) {

    res.status(500).json({
      mensaje: error.message
    })

  }
}