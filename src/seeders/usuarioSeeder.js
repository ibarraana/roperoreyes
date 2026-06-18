import Usuario from '../models/Usuario.js'

export const seedUsuarios = async () => {

  await Usuario.bulkCreate([

    {
      nombre: 'Gabriela',
      apellido: 'Ibarra',
      email: 'gabi@gmail.com',
      password: '123456',
      telefono: '351111111',
      rol: 'admin'
    },

    {
      nombre: 'Ana',
      apellido: 'Lopez',
      email: 'ana@gmail.com',
      password: '123456',
      telefono: '351222222',
      rol: 'cliente'
    }

  ])

}