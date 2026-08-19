import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const MetodoPago = sequelize.define('MetodoPago', {

  idMetodoPago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(25),
    allowNull: false
  }
}, {
  tableName: 'metodos_pagos'
})

export default MetodoPago