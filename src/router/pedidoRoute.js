import { Router } from "express"
import { Pedido } from '../models/index.js'

export const PedidoRouteo = Router();

PedidoRouteo.get('/', async (req, res) => {
    try {
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

PedidoRouteo.get('/:id', async (req, res) => {
    try { 
        const pedido = await Pedido.findByPk(req.params.id); 
        if (!pedido) {
            return res.status(404).json({ error: 'Pedido no encontrado' });
        }
        res.json(pedido); 
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

PedidoRouteo.post('/', async (req, res) => {
    try { 
        const nuevoPedido = await Pedido.create(req.body);
        res.status(201).json(nuevoPedido); 
    } catch (e) { 
        res.status(400).json({ error: e.message }); // 400 para errores de validación
    }
});

PedidoRouteo.put('/:id', async (req, res) => {
    try { 
        const [filasActualizadas] = await Pedido.update(req.body, { 
            where: { id_pedido: req.params.id } 
        });
        
        if (filasActualizadas === 0) {
            return res.status(404).json({ error: 'Pedido no encontrado para actualizar' });
        }
        
        res.json({ message: 'Actualizado con éxito' });
    } catch (e) { 
        res.status(400).json({ error: e.message }); 
    }
});

PedidoRouteo.delete('/:id', async (req, res) => {
    try { 
        const filasEliminadas = await Pedido.destroy({ 
            where: { id_pedido: req.params.id } 
        });
        
        if (filasEliminadas === 0) {
            return res.status(404).json({ error: 'Pedido no encontrado para eliminar' });
        }
        
        res.json({ message: 'Eliminado con éxito' });
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});
