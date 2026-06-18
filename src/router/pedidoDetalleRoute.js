import { Router } from "express"
import { PedidoDetalle } from '../models/index.js'

export const PedidoDetalleRouteo = Router();

PedidoDetalleRouteo.get('/', async (req, res) => {
    try {
        const pedidos = await PedidoDetalle.findAll();
        res.json(pedidos);
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

PedidoDetalleRouteo.get('/:id', async (req, res) => {
    try { 
        const pedido = await PedidoDetalle.findByPk(req.params.id); 
        if (!pedido) {
            return res.status(404).json({ error: 'PedidoDetalle no encontrado' });
        }
        res.json(pedido); 
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

PedidoDetalleRouteo.post('/', async (req, res) => {
    try { 
        const nuevoPedido = await PedidoDetalle.create(req.body);
        res.status(201).json(nuevoPedido); 
    } catch (e) { 
        res.status(400).json({ error: e.message }); // 400 para errores de validación
    }
});

PedidoDetalleRouteo.put('/:id', async (req, res) => {
    try { 
        const [filasActualizadas] = await PedidoDetalle.update(req.body, { 
            where: { id_pedido_detalle: req.params.id } 
        });
        
        if (filasActualizadas === 0) {
            return res.status(404).json({ error: 'PedidoDetalle no encontrado para actualizar' });
        }
        
        res.json({ message: 'Actualizado con éxito' });
    } catch (e) { 
        res.status(400).json({ error: e.message }); 
    }
});

PedidoDetalleRouteo.delete('/:id', async (req, res) => {
    try { 
        const filasEliminadas = await PedidoDetalle.destroy({ 
            where: { id_pedido_detalle: req.params.id } 
        });
        
        if (filasEliminadas === 0) {
            return res.status(404).json({ error: 'PedidoDetalle no encontrado para eliminar' });
        }
        
        res.json({ message: 'Eliminado con éxito' });
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});
