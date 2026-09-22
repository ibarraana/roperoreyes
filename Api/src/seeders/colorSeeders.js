import Color from '../models/color.model.js';

export default {
  up: async () => {
    console.log('Insertando colores por defecto...');
    
    await Color.findOrCreate({ where: { nombre: 'Blanco' } });
    await Color.findOrCreate({ where: { nombre: 'Celeste' } });
    await Color.findOrCreate({ where: { nombre: 'Rosa' } });
    await Color.findOrCreate({ where: { nombre: 'Gris Melange' } });
  },

  down: async () => {
    console.log('Limpiando tabla colores...');
    await Color.destroy({ where: {}, truncate: true });
  }
}
