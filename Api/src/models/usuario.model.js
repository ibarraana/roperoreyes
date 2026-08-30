import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Usuario = sequelize.define('Usuario', {

  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  calle: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  piso: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  departamento: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  ciudad: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  provincia: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  codigoPostal: {
    type: DataTypes.STRING(25),
    allowNull: false
  }
}, {
  tableName: 'usuarios'
})

export default Usuario