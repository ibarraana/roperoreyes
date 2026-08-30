import { Estado } from '../models/index.js'

export const obtenerEstado = async (req, res) => {
    try { 
      res.json(await Estado.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerEstadoPorId = async (req, res) => {
    try { 
        const estado = await Estado.findByPk(req.params.id); 
        if (!estado) return res.status(404).json({ error: 'Estado no encontrada' });
        res.json(estado); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearEstado = async (req, res) => {
    try { 
      res.status(201).json(await Estado.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarEstado = async (req, res) => {
    try { 
        const [filas] = await Estado.update(req.body, { where: { id_estado: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Estado no encontrada' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarEstado = async (req, res) => {
    try { 
        const filas = await Estado.destroy({ where: { id_estado: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Estado no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
