import { Router } from "express"

import { 
    obtenerCarritosDetalles, 
    obtenerCarritoDetallePorId, 
    crearCarritoDetalle, 
    actualizarCarritoDetalle, 
    eliminarCarritoDetalle 
} from "../controllers/carritoDetalleController.js" 

export const CarritoDetalleRouteo = Router()

CarritoDetalleRouteo.get('/', obtenerCarritosDetalles)
CarritoDetalleRouteo.get('/:id', obtenerCarritoDetallePorId)
CarritoDetalleRouteo.post('/', crearCarritoDetalle)
CarritoDetalleRouteo.put('/:id', actualizarCarritoDetalle)
CarritoDetalleRouteo.delete('/:id', eliminarCarritoDetalle)

/*import { Router } from "express"
import { CarritoDetalle } from '../models/index.js'

export const CarritoDetalleRouteo = Router();

CarritoDetalleRouteo.get('/', async (req, res) => {
    try {
        const carritos = await CarritoDetalle.findAll();
        res.json(carritos);
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

CarritoDetalleRouteo.get('/:id', async (req, res) => {
    try { 
        const carrito = await CarritoDetalle.findByPk(req.params.id); 
        if (!carrito) {
            return res.status(404).json({ error: 'CarritoDetalle no encontrado' });
        }
        res.json(carrito); 
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

CarritoDetalleRouteo.post('/', async (req, res) => {
    try { 
        const nuevoCarrito = await CarritoDetalle.create(req.body);
        res.status(201).json(nuevoCarrito); 
    } catch (e) { 
        res.status(400).json({ error: e.message });
    }
});

CarritoDetalleRouteo.put('/:id', async (req, res) => {
    try { 
        const [filasActualizadas] = await CarritoDetalle.update(req.body, { 
            where: { id_carrito_detalle: req.params.id } 
        });
        
        if (filasActualizadas === 0) {
            return res.status(404).json({ error: 'CarritoDetalle no encontrado para actualizar' });
        }
        
        res.json({ message: 'Actualizado con éxito' });
    } catch (e) { 
        res.status(400).json({ error: e.message }); 
    }
});

CarritoDetalleRouteo.delete('/:id', async (req, res) => {
    try { 
        const filasEliminadas = await CarritoDetalle.destroy({ 
            where: { id_carrito_detalle: req.params.id } 
        });
        
        if (filasEliminadas === 0) {
            return res.status(404).json({ error: 'CarritoDetalle no encontrado para eliminar' });
        }
        
        res.json({ message: 'Eliminado con éxito' });
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});
*/