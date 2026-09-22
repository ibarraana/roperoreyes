import Rol from '../models/rol.model.js';
import Usuario from '../models/usuario.model.js';

export default {
  up: async () => {
    console.log('Insertando roles por defecto...');
    
    const [rolAdmin] = await Rol.findOrCreate({
      where: { descripcion: 'Administrador' }
    });

    const [rolCliente] = await Rol.findOrCreate({
      where: { descripcion: 'Cliente' }
    });

    console.log('Insertando usuario administrador de prueba...');

    await Usuario.findOrCreate({
      where: { email: 'admin@reyesropero.com' },
      defaults: {
        nombre: 'Administrador',
        passwordUsuario: '123456',
        telefono: '12345678',
        calle: 'Ninguna',
        piso: '1',
        departamento: 'A',
        ciudad: 'Ninguna',
        provincia: 'Ninguna',
        codigoPostal: '1000',
        idRol: rolAdmin.idRol 
      }
    });
  },

  down: async () => {
    await Usuario.destroy({ where: {} });
    await Rol.destroy({ where: {} });
  }
}
