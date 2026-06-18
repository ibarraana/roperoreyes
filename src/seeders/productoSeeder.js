import Producto from '../models/Producto.js';

export default {
  up: async () => {
    const productos = [
      {
        nombre: 'Body de Algodón Oso',
        descripcion: 'Body manga larga 100% algodón hipoalergénico para recién nacidos.',
        imagen: 'https://ejemplo.com',
        precio: 4500.00,
        stock: 25,
        categoria: 'bebe'
      }
    ];

    console.log('Verificando e insertando productos...');

    for (const prod of productos) {
      await Producto.findOrCreate({
        where: { nombre: prod.nombre },
        defaults: {
          descripcion: prod.descripcion,
          imagen: prod.imagen,
          precio: prod.precio,
          stock: prod.stock,
          categoria: prod.categoria
        }
      });
    }
  },

  down: async () => {
    await Producto.destroy({ where: {}, truncate: true });
  }
};
