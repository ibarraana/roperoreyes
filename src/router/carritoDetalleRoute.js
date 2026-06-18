import { Router } from "express"
import { CarritoDetalle } from '../models/index.js'

export const CarritoDetalleRouteo = Router();

CarritoDetalleRouteo.get('/', async (req, res) => {
    try {
        res.json(await CarritoDetalle.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});

CarritoDetalleRouteo.get('/:id', async (req, res) => {
    try { 
        res.json(await CarritoDetalle.findByPk(req.params.id)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

CarritoDetalleRouteo.post('/', async (req, res) => {
    try { 
        res.status(201).json(await CarritoDetalle.create(req.body)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

CarritoDetalleRouteo.put('/:id', async (req, res) => {
    try { 
        await CarritoDetalle.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Actualizado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

CarritoDetalleRouteo.delete('/:id', async (req, res) => {
    try { 
        await CarritoDetalle.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Eliminado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});