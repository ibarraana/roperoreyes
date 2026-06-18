import { DataTypes } from 'sequelize'
import { sequelize } from '../config/database.js'

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(25),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  direccion: {
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
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
})

export default Usuario