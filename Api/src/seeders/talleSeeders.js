import Talle from '../models/talle.model.js';

export default {
  up: async () => {
    console.log('Insertando talles por defecto...');
    
    await Talle.findOrCreate({ where: { nombre: 'Bebe menos 1 mes' } });
    await Talle.findOrCreate({ where: { nombre: '3 Meses' } });
    await Talle.findOrCreate({ where: { nombre: '6 Meses' } });
    await Talle.findOrCreate({ where: { nombre: 'Talle 2' } });
    await Talle.findOrCreate({ where: { nombre: 'Talle 4' } });
  },

  down: async () => {
    console.log('Limpiando tabla talles...');
    await Talle.destroy({ where: {}, truncate: true });
  }
}
