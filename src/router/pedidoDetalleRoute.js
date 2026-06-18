import { Router } from "express"
import { PedidoDetalle } from '../models/index.js'

export const PedidoDetalleRouteo = Router();

PedidoDetalleRouteo.get('/', async (req, res) => {
    try {
        res.json(await PedidoDetalle.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});

PedidoDetalleRouteo.get('/:id', async (req, res) => {
    try { 
        res.json(await PedidoDetalle.findByPk(req.params.id)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

PedidoDetalleRouteo.post('/', async (req, res) => {
    try { 
        res.status(201).json(await PedidoDetalle.create(req.body)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

PedidoDetalleRouteo.put('/:id', async (req, res) => {
    try { 
        await PedidoDetalle.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Actualizado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

PedidoDetalleRouteo.delete('/:id', async (req, res) => {
    try { 
        await PedidoDetalle.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Eliminado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});