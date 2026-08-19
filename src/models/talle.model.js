import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Talle = sequelize.define('Talle', {

  idTalle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'talles'
})

export default Talle