import Producto from '../models/Producto.js'

export const seedProductos = async () => {

  await Producto.bulkCreate([

    {
      nombre: 'Nike Air Max',
      descripcion: 'Zapatilla deportiva',
      imagen: 'nike.jpg',
      precio: 250000,
      stock: 10,
      categoria: 'zapatilla'
    },

    {
      nombre: 'Remera Adidas',
      descripcion: 'Remera algodón',
      imagen: 'adidas.jpg',
      precio: 35000,
      stock: 50,
      categoria: 'remera'
    }

  ])

}