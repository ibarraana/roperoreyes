import { EstadoPago } from '../models/index.js'

export const obtenerEstadoPago = async (req, res) => {
    try { 
      res.json(await EstadoPago.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerEstadoPagoPorId = async (req, res) => {
    try { 
        const estadoPago = await EstadoPago.findByPk(req.params.id); 
        if (!estadoPago) return res.status(404).json({ error: 'Estado Pago no encontrada' });
        res.json(estadoPago); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearEstadoPago = async (req, res) => {
    try { 
      res.status(201).json(await EstadoPago.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarEstadoPago = async (req, res) => {
    try { 
        const [filas] = await EstadoPago.update(req.body, { where: { id_estado_pago: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Estado Pago no encontrada' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarEstadoPago = async (req, res) => {
    try { 
        const filas = await EstadoPago.destroy({ where: { id_estado_pago: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Estado Pago no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
