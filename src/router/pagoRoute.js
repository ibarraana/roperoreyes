import { Router } from "express"
import { Pago } from '../models/index.js'

export const PagoRouteo = Router();

PagoRouteo.get('/', async (req, res) => {
    try {
        res.json(await Pago.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});

PagoRouteo.get('/:id', async (req, res) => {
    try { 
        res.json(await Pago.findByPk(req.params.id)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

PagoRouteo.post('/', async (req, res) => {
    try { 
        res.status(201).json(await Pago.create(req.body)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

PagoRouteo.put('/:id', async (req, res) => {
    try { 
        await Pago.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Actualizado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

PagoRouteo.delete('/:id', async (req, res) => {
    try { 
        await Pago.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Eliminado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});