import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Estado = sequelize.define('Estado', {

  idEstado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'estados'
})

export default Estado