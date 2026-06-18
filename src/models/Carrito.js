import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Carrito = sequelize.define('Carrito', {

  id_carrito: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }

})

export default Carrito