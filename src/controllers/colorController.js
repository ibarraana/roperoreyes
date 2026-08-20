import { Color } from '../models/index.js'

export const obtenerColor = async (req, res) => {
    try { 
      res.json(await Color.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerColorPorId = async (req, res) => {
    try { 
        const color = await Color.findByPk(req.params.id); 
        if (!color) return res.status(404).json({ error: 'Color no encontrada' });
        res.json(color); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearColor = async (req, res) => {
    try { 
      res.status(201).json(await Color.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarColor = async (req, res) => {
    try { 
        const [filas] = await Color.update(req.body, { where: { id_color: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Color no encontrada' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarColor = async (req, res) => {
    try { 
        const filas = await Color.destroy({ where: { id_color: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Color no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
