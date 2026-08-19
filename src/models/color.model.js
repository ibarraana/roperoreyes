import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Color = sequelize.define('Color', {

  idColor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'colores'
})

export default Color