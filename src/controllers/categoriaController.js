import { Categoria } from '../models/index.js'

export const obtenerCategorias = async (req, res) => {
    try { 
      res.json(await Categoria.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerCategoriaPorId = async (req, res) => {
    try { 
        const categoria = await Categoria.findByPk(req.params.id); 
        if (!categoria) return res.status(404).json({ error: 'Categoria no encontrada' });
        res.json(categoria); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearCategoria = async (req, res) => {
    try { 
      res.status(201).json(await Categoria.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarCategoria = async (req, res) => {
    try { 
        const [filas] = await Categoria.update(req.body, { where: { id_categoria: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Categoria no encontrada' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarCategoria = async (req, res) => {
    try { 
        const filas = await Categoria.destroy({ where: { id_categoria: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Categoria no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
