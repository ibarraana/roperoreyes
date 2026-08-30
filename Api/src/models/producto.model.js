import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Producto = sequelize.define('Producto', {

  idProducto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }, 
  imagen: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  idCategoria: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idTalle: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idColor: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'productos'
})

export default Producto