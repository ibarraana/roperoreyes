import { Router } from "express"
import { Carrito } from '../models/index.js'

export const CarritoRouteo = Router();

CarritoRouteo.get('/', async (req, res) => {
    try {
        const carritos = await Carrito.findAll();
        res.json(carritos);
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

CarritoRouteo.get('/:id', async (req, res) => {
    try { 
        const carrito = await Carrito.findByPk(req.params.id); 
        if (!carrito) {
            return res.status(404).json({ error: 'Carrito no encontrado' });
        }
        res.json(carrito); 
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

CarritoRouteo.post('/', async (req, res) => {
    try { 
        const nuevoCarrito = await Carrito.create(req.body);
        res.status(201).json(nuevoCarrito); 
    } catch (e) { 
        res.status(400).json({ error: e.message }); // 400 para errores de validación
    }
});

CarritoRouteo.put('/:id', async (req, res) => {
    try { 
        const [filasActualizadas] = await Carrito.update(req.body, { 
            where: { id_carrito: req.params.id } 
        });
        
        if (filasActualizadas === 0) {
            return res.status(404).json({ error: 'Carrito no encontrado para actualizar' });
        }
        
        res.json({ message: 'Actualizado con éxito' });
    } catch (e) { 
        res.status(400).json({ error: e.message }); 
    }
});

CarritoRouteo.delete('/:id', async (req, res) => {
    try { 
        const filasEliminadas = await Carrito.destroy({ 
            where: { id_carrito: req.params.id } 
        });
        
        if (filasEliminadas === 0) {
            return res.status(404).json({ error: 'Carrito no encontrado para eliminar' });
        }
        
        res.json({ message: 'Eliminado con éxito' });
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});
