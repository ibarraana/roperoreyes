import { Router } from "express"
import { Carrito } from '../models/index.js'

export const CarritoRouteo = Router();

CarritoRouteo.get('/', async (req, res) => {
    try {
        res.json(await Carrito.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});

CarritoRouteo.get('/:id', async (req, res) => {
    try { 
        res.json(await Carrito.findByPk(req.params.id)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

CarritoRouteo.post('/', async (req, res) => {
    try { 
        res.status(201).json(await Carrito.create(req.body)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

CarritoRouteo.put('/:id', async (req, res) => {
    try { 
        await Carrito.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Actualizado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

CarritoRouteo.delete('/:id', async (req, res) => {
    try { 
        await Carrito.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Eliminado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});