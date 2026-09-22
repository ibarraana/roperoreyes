import Categoria from '../models/categoria.model.js';

export default {
  up: async () => {
    console.log('Insertando categorías por defecto...');
    
    await Categoria.findOrCreate({ where: { nombre: 'Bebés' } });
    await Categoria.findOrCreate({ where: { nombre: 'Niños' } });
    await Categoria.findOrCreate({ where: { nombre: 'Accesorios' } });
  },

  down: async () => {
    console.log('Limpiando tabla categorias...');
    await Categoria.destroy({ where: {}, truncate: true });
  }
}
