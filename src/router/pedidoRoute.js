import { Router } from "express"
import { Pedido } from '../models/index.js'

export const PedidoRouteo = Router();

PedidoRouteo.get('/', async (req, res) => {
    try {
        res.json(await Pedido.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});

PedidoRouteo.get('/:id', async (req, res) => {
    try { 
        res.json(await Pedido.findByPk(req.params.id)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

PedidoRouteo.post('/', async (req, res) => {
    try { 
        res.status(201).json(await Pedido.create(req.body)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

PedidoRouteo.put('/:id', async (req, res) => {
    try { 
        await Pedido.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Actualizado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

PedidoRouteo.delete('/:id', async (req, res) => {
    try { 
        await Pedido.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Eliminado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});