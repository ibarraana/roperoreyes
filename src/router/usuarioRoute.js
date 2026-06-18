import { Router } from "express"
import { Usuario } from '../models/index.js'

export const UsuarioRouteo = Router();

UsuarioRouteo.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

UsuarioRouteo.get('/:id', async (req, res) => {
    try { 
        const usuario = await Usuario.findByPk(req.params.id); 
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(usuario); 
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

UsuarioRouteo.post('/', async (req, res) => {
    try { 
        const nuevoUsuario = await Usuario.create(req.body);
        res.status(201).json(nuevoUsuario); 
    } catch (e) { 
        res.status(400).json({ error: e.message }); // 400 para errores de validación
    }
});

UsuarioRouteo.put('/:id', async (req, res) => {
    try { 
        const [filasActualizadas] = await Usuario.update(req.body, { 
            where: { id_usuario: req.params.id } 
        });
        
        if (filasActualizadas === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado para actualizar' });
        }
        
        res.json({ message: 'Actualizado con éxito' });
    } catch (e) { 
        res.status(400).json({ error: e.message }); 
    }
});

UsuarioRouteo.delete('/:id', async (req, res) => {
    try { 
        const filasEliminadas = await Usuario.destroy({ 
            where: { id_usuario: req.params.id } 
        });
        
        if (filasEliminadas === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado para eliminar' });
        }
        
        res.json({ message: 'Eliminado con éxito' });
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});
