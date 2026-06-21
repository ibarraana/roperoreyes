import { Router } from "express"

import { 
    obtenerPagos, 
    obtenerPagoPorId, 
    crearPago, 
    actualizarPago, 
    eliminarPago 
} from "../controllers/pagoController.js" 

export const PagoRouteo = Router()

PagoRouteo.get('/', obtenerPagos)
PagoRouteo.get('/:id', obtenerPagoPorId)
PagoRouteo.post('/', crearPago)
PagoRouteo.put('/:id', actualizarPago)
PagoRouteo.delete('/:id', eliminarPago)

/*import { Router } from "express"
import { Pago } from '../models/index.js'

export const PagoRouteo = Router();

PagoRouteo.get('/', async (req, res) => {
    try {
        const pagos = await Pago.findAll();
        res.json(pagos);
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

PagoRouteo.get('/:id', async (req, res) => {
    try { 
        const pago = await Pago.findByPk(req.params.id); 
        if (!pago) {
            return res.status(404).json({ error: 'Pago no encontrado' });
        }
        res.json(pago); 
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});

PagoRouteo.post('/', async (req, res) => {
    try { 
        const nuevoPago = await Pago.create(req.body);
        res.status(201).json(nuevoPago); 
    } catch (e) { 
        res.status(400).json({ error: e.message }); // 400 para errores de validación
    }
});

PagoRouteo.put('/:id', async (req, res) => {
    try { 
        const [filasActualizadas] = await Pago.update(req.body, { 
            where: { id_pago: req.params.id } 
        });
        
        if (filasActualizadas === 0) {
            return res.status(404).json({ error: 'Pago no encontrado para actualizar' });
        }
        
        res.json({ message: 'Actualizado con éxito' });
    } catch (e) { 
        res.status(400).json({ error: e.message }); 
    }
});

PagoRouteo.delete('/:id', async (req, res) => {
    try { 
        const filasEliminadas = await Pago.destroy({ 
            where: { id_pago: req.params.id } 
        });
        
        if (filasEliminadas === 0) {
            return res.status(404).json({ error: 'Pago no encontrado para eliminar' });
        }
        
        res.json({ message: 'Eliminado con éxito' });
    } catch (e) { 
        res.status(500).json({ error: e.message }); 
    }
});
*/