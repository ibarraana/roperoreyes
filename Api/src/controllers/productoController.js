import { Producto } from '../models/index.js'

export const obtenerProducto = async (req, res) => {
    try { 
      res.json(await Producto.findAll()) 
    } 
    catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const obtenerProductoPorId = async (req, res) => {
    try { 
        const producto = await Producto.findByPk(req.params.id); 
        if (!producto) return res.status(404).json({ error: 'Producto no encontrada' });
        res.json(producto); 
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}

export const crearProducto = async (req, res) => {
    try { 

      if (!req.body) {
        return res.status(400).json({ error: 'No se recibieron datos' });
      }

      const nombre = req.body.nombre;
      const precio = req.body.precio;
      const stock = req.body.stock;
      const imagen = req.body.imagen;

      if (nombre != null && nombre.toString() != "" &&
          precio != null && precio != "0" &&
          stock != null && stock != "0" &&
          imagen != null && imagen.toString() != ""
      ) {
        const nuevoProducto = await Producto.create(req.body);
        return res.status(201).json(nuevoProducto); 
      } else {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
      }
    } 
    catch (e) { 
      res.status(400).json({ error: e.message }); 
    }
}

export const actualizarProducto = async (req, res) => {
    try { 
        const [filas] = await Producto.update(req.body, { where: { id_producto: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Producto no encontrada' })
        res.json({ message: 'Actualizado' })
    } catch (e) { 
      res.status(400).json({ error: e.message }) 
    }
}

export const eliminarProducto = async (req, res) => {
    try { 
        const filas = await Producto.destroy({ where: { id_producto: req.params.id } })
        if (filas === 0) return res.status(404).json({ error: 'Producto no encontrado' })
        res.json({ message: 'Eliminado' })
    } catch (e) { 
      res.status(500).json({ error: e.message })
    }
}
