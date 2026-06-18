import { Router } from "express"
import { Producto } from '../models/index.js'

export const ProductoRouteo = Router();

ProductoRouteo.get('/', async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

ProductoRouteo.get('/:id', async (req, res) => {
    try { 
        const producto = await Producto.findByPk(req.params.id); 
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(producto); 
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

ProductoRouteo.post('/', async (req, res) => {
    try { 
        const nuevoProducto = await Producto.create(req.body);
        res.status(201).json(nuevoProducto); 
    } catch (e) { 
        res.status(400).json({ error: e.message }); // 400 para errores de validación
    }
});

ProductoRouteo.put('/:id', async (req, res) => {
    try { 
        const [filasActualizadas] = await Producto.update(req.body, { 
            where: { id_producto: req.params.id } 
        });
        
        if (filasActualizadas === 0) {
            return res.status(404).json({ error: 'Producto no encontrado para actualizar' });
        }
        
        res.json({ message: 'Actualizado con éxito' });
    } catch (e) { 
        res.status(400).json({ error: e.message }); 
    }
});

ProductoRouteo.delete('/:id', async (req, res) => {
    try { 
        const filasEliminadas = await Producto.destroy({ 
            where: { id_producto: req.params.id } 
        });
        
        if (filasEliminadas === 0) {
            return res.status(404).json({ error: 'Producto no encontrado para eliminar' });
        }
        
        res.json({ message: 'Eliminado con éxito' });
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});
