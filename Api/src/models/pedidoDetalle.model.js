import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const PedidoDetalle = sequelize.define('PedidoDetalle', {

  idPedidoDetalle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idPedido: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idProducto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idTalle: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idColor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precioUnitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'pedido_detalles'
})

export default PedidoDetalle