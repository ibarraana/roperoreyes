import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Rol = sequelize.define('Rol', {

  idRol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'roles'
})


export default Rol