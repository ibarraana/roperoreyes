import { Pago } from '../models/index.js'

export const obtenerPagos = async (req, res) => {
    try { 
      res.json(await Pago.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerPagoPorId = async (req, res) => {
    try { 
        const pago = await Pago.findByPk(req.params.id); 
        if (!pago) return res.status(404).json({ error: 'Pago no encontrado' });
        res.json(pago); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearPago = async (req, res) => {
    try { 
      res.status(201).json(await Pago.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarPago = async (req, res) => {
    try { 
        const [filas] = await Pago.update(req.body, { where: { id_pago: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Pago no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarPago = async (req, res) => {
    try { 
        const filas = await Pago.destroy({ where: { id_pago: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Pago no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
