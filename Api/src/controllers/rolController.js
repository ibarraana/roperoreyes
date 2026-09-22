import { Rol } from '../models/index.js'

export const obtenerRol = async (req, res) => {
    try { 
      res.json(await Rol.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerRolPorId = async (req, res) => {
    try { 
        const rol = await Rol.findByPk(req.params.id); 
        if (!rol) return res.status(404).json({ error: 'Rol no encontrado' });
        res.json(rol); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearRol = async (req, res) => {
    try { 
      res.status(201).json(await Rol.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarRol = async (req, res) => {
    try { 
        const [filas] = await Rol.update(req.body, { where: { idRol: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Rol no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarRol = async (req, res) => {
    try { 
        const filas = await Rol.destroy({ where: { idRol: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Rol no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
