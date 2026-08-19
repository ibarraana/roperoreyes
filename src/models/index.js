import CarritoDetalle from './carritoDetalle.model.js'
import Pago from './pago.model.js'
import Pedido from './pedido.model.js'
import PedidoDetalle from './pedidoDetalle.model.js'
import Producto from './producto.model.js'
import Usuario from './usuario.model.js'
import Carrito from './carrito.model.js'

Carrito.belongsTo(Usuario, { foreignKey: 'id_usuario' })
Usuario.hasMany(Carrito, { foreignKey: 'id_usuario' })

CarritoDetalle.belongsTo(Carrito, { foreignKey: 'id_carrito' })
Carrito.hasMany(CarritoDetalle, { foreignKey: 'id_carrito' })

CarritoDetalle.belongsTo(Producto, { foreignKey: 'id_producto' })
Producto.hasMany(CarritoDetalle, { foreignKey: 'id_producto' })

Pedido.belongsTo(Usuario, { foreignKey: 'id_usuario' })
Usuario.hasMany(Pedido, { foreignKey: 'id_usuario' })

PedidoDetalle.belongsTo(Pedido, { foreignKey: 'id_pedido' })
Pedido.hasMany(PedidoDetalle, { foreignKey: 'id_pedido' })

PedidoDetalle.belongsTo(Producto, { foreignKey: 'id_producto' })
Producto.hasMany(PedidoDetalle, { foreignKey: 'id_producto' })

Pago.belongsTo(Pedido, { foreignKey: 'id_pedido' })
Pedido.hasOne(Pago, { foreignKey: 'id_pedido' })


export{
    CarritoDetalle,
    Usuario,
    Carrito,
    Producto,
    Pedido,
    PedidoDetalle,
    Pago
}
