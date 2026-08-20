import { MetodoPago } from '../models/index.js'

export const obtenerMetodoPago = async (req, res) => {
    try { 
      res.json(await MetodoPago.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerMetodoPagoPorId = async (req, res) => {
    try { 
        const metodoPago = await MetodoPago.findByPk(req.params.id); 
        if (!metodoPago) return res.status(404).json({ error: 'Metodo Pago no encontrada' });
        res.json(estadoPago); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearMetodoPago = async (req, res) => {
    try { 
      res.status(201).json(await MetodoPago.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarMetodoPago = async (req, res) => {
    try { 
        const [filas] = await MetodoPago.update(req.body, { where: { id_metodo_pago: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Metodo Pago no encontrada' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarMetodoPago = async (req, res) => {
    try { 
        const filas = await MetodoPago.destroy({ where: { id_metodo_pago: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Metodo Pago no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
