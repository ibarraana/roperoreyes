import { Router } from "express"
import { Producto } from '../models/index.js'

export const ProductoRouteo = Router();

ProductoRouteo.get('/', async (req, res) => {
    try {
        res.json(await Producto.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});

ProductoRouteo.get('/:id', async (req, res) => {
    try { 
        res.json(await Producto.findByPk(req.params.id)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

ProductoRouteo.post('/', async (req, res) => {
    try { 
        res.status(201).json(await Producto.create(req.body)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

ProductoRouteo.put('/:id', async (req, res) => {
    try { 
        await Producto.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Actualizado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

ProductoRouteo.delete('/:id', async (req, res) => {
    try { 
        await Producto.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Eliminado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});