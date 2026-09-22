import Producto from '../models/producto.model.js';
import Categoria from '../models/categoria.model.js';
import Talle from '../models/talle.model.js';
import Color from '../models/color.model.js';

export default {
  up: async () => {
    console.log('Buscando relaciones para los productos...');

    const categoriaBebe = await Categoria.findOne({ where: { nombre: 'Bebés' } });
    const categoriaNinos = await Categoria.findOne({ where: { nombre: 'Niños' } });

    const talleRN = await Talle.findOne({ where: { nombre: 'RN (Recién Nacido)' } });
    const talle3M = await Talle.findOne({ where: { nombre: '3 Meses' } });
    const talleT2 = await Talle.findOne({ where: { nombre: 'Talle 2' } });

    const colorBlanco = await Color.findOne({ where: { nombre: 'Blanco' } });
    const colorCeleste = await Color.findOne({ where: { nombre: 'Celeste' } });
    const colorRosa = await Color.findOne({ where: { nombre: 'Rosa' } });

    console.log('Insertando productos por defecto...');

    if (categoriaBebe && talleRN && colorBlanco) {
      await Producto.findOrCreate({
        where: { nombre: 'Body de Algodón Oso Blanco RN' },
        defaults: {
          precio: 4500.00,
          stock: 15,
          imagen: 'Sin imagen',
          idCategoria: categoriaBebe.idCategoria,
          idTalle: talleRN.idTalle,
          idColor: colorBlanco.idColor
        }
      });
    }

    if (categoriaBebe && talle3M && colorCeleste) {
      await Producto.findOrCreate({
        where: { nombre: 'Body de Algodón Oso Celeste 3M' },
        defaults: {
          precio: 4500.00,
          stock: 10,
          imagen: 'Sin imagen',
          idCategoria: categoriaBebe.idCategoria,
          idTalle: talle3M.idTalle,
          idColor: colorCeleste.idColor
        }
      });
    }

    if (categoriaNinos && talleT2 && colorRosa) {
      await Producto.findOrCreate({
        where: { nombre: 'Pantalón Jogger Rústico Rosa T2' },
        defaults: {
          precio: 6200.00,
          stock: 8,
          imagen: 'Sin imagen',
          idCategoria: categoriaNinos.idCategoria,
          idTalle: talleT2.idTalle,
          idColor: colorRosa.idColor
        }
      });
    }

    console.log('Catálogo de productos insertado con éxito.');
  },

  down: async () => {
    console.log('Limpiando tabla productos...');
    await Producto.destroy({ where: {}, truncate: true });
  }
}
