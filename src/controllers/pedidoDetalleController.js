import { PedidoDetalle } from '../models/index.js'

export const obtenerPedidosDetalles = async (req, res) => {
    try { 
      res.json(await PedidoDetalle.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerPedidosDetallesPorId = async (req, res) => {
    try { 
        const pedido = await PedidoDetalle.findByPk(req.params.id); 
        if (!pedido) return res.status(404).json({ error: 'Pedido Detalle no encontrado' });
        res.json(pedido); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearPedidoDetalle = async (req, res) => {
    try { 
      res.status(201).json(await PedidoDetalle.create(req.body)); 
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarPedidoDetalle = async (req, res) => {
    try { 
        const [filas] = await PedidoDetalle.update(req.body, { where: { id_detalle_pedido: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Pedido Detalle no encontrado' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarPedidoDetalle = async (req, res) => {
    try { 
        const filas = await PedidoDetalle.destroy({ where: { id_detalle_pedido: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Pedido Detalle no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
