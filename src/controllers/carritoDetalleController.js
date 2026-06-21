import { CarritoDetalle } from '../models/index.js'

export const obtenerCarritosDetalles = async (req, res) => {
    try { 
      res.json(await CarritoDetalle.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerCarritoDetallePorId = async (req, res) => {
    try { 
        const producto = await CarritoDetalle.findByPk(req.params.id); 
        if (!producto) return res.status(404).json({ error: 'Carrito Detalle no encontrado' });
        res.json(producto); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearCarritoDetalle = async (req, res) => {
    try { 
      res.status(201).json(await CarritoDetalle.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarCarritoDetalle = async (req, res) => {
    try { 
        const [filas] = await CarritoDetalle.update(req.body, { where: { id_detalle: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Carrito Detalle no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarCarritoDetalle = async (req, res) => {
    try { 
        const filas = await CarritoDetalle.destroy({ where: { id_detalle: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Carrito Detalle no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
