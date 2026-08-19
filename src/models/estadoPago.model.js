import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const EstadoPago = sequelize.define('EstadoPago', {

  idEstadoPago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(25),
    allowNull: false
  }
}, {
  tableName: 'estados_pagos'
})

export default EstadoPago