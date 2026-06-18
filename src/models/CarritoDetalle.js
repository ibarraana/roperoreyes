import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const CarritoDetalle = sequelize.define('CarritoDetalle', {

  id_detalle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_carrito: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  talle: {
    type: DataTypes.STRING(20),
    allowNull: false
  }

})

export default CarritoDetalle