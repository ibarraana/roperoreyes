import { Router } from "express"
import { Usuario } from '../models/index.js'

export const UsuarioRouteo = Router();

UsuarioRouteo.get('/', async (req, res) => {
    try {
        res.json(await Usuario.findAll());
    }
    catch (e) { res.status(500).json({ error: e.message }); }
});

UsuarioRouteo.get('/:id', async (req, res) => {
    try { 
        res.json(await Usuario.findByPk(req.params.id)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

UsuarioRouteo.post('/', async (req, res) => {
    try { 
        res.status(201).json(await Usuario.create(req.body)); 
    } 
    catch (e) { res.status(500).json({ error: e.message }); }
});

UsuarioRouteo.put('/:id', async (req, res) => {
    try { 
        await Usuario.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Actualizado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

UsuarioRouteo.delete('/:id', async (req, res) => {
    try { 
        await Usuario.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Eliminado' });
    } catch (e) { res.status(500).json({ error: e.message }); }
});