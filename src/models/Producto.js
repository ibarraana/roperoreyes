import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Producto = sequelize.define('Producto', {

  id_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  imagen: {
    type: DataTypes.STRING(255),
    allowNull: false
  },

  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },

  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },

  categoria: {
    type: DataTypes.ENUM(
      'bebe',
      'niño'
    ),
    defaultValue: 'bebe'
  }

})

export default Producto