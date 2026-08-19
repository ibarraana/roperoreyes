import Carrito from './carrito.model.js'
import CarritoDetalle from './carritoDetalle.model.js'
import Categoria from './categoria.model.js'
import Color from './color.model.js'
import Estado from './estado.model.js'
import EstadoPago from './estadoPago.model.js'
import MetodoPago from './metodoPago.model.js'
import Pago from './pago.model.js'
import Pedido from './pedido.model.js'
import PedidoDetalle from './pedidoDetalle.model.js'
import Producto from './producto.model.js'
import Talle from './talle.model.js'
import Usuario from './usuario.model.js'

Pago.belongsTo(MetodoPago, { foreignKey: "idMetodosPagos" })
MetodoPago.hasMany(Pago, { foreignKey: "idMetodosPagos" })

Pago.belongsTo(Estado, { foreignKey: "idEstado" })
Estado.hasMany(Pago, { foreignKey: "idEstado" })

Pago.belongsTo(Pedido, { foreignKey: "idPedido" })
Pedido.hasMany(Pago, { foreignKey: "idPedido" })

Producto.belongsTo(Categoria, { foreignKey: "idCategoria" })
Categoria.hasMany(Producto, { foreignKey: "idCategoria" })

Producto.belongsTo(Talle, { foreignKey: "idTalle" })
Talle.hasMany(Producto, { foreignKey: "idTalle" })

Producto.belongsTo(Color, { foreignKey: "idColor" })
Color.hasMany(Producto, { foreignKey: "idColor" })

Carrito.belongsTo(Usuario, { foreignKey: "idUsuario" })
Usuario.hasMany(Carrito, { foreignKey: "idUsuario" })

CarritoDetalle.belongsTo(Carrito, { foreignKey: "idCarrito" })
Carrito.hasMany(CarritoDetalle, { foreignKey: "idCarrito" })

CarritoDetalle.belongsTo(Producto, { foreignKey: "idProducto" })
Producto.hasMany(CarritoDetalle, { foreignKey: "idProducto" })

CarritoDetalle.belongsTo(Talle, { foreignKey: "idTalle" })
Talle.hasMany(CarritoDetalle, { foreignKey: "idTalle" })

CarritoDetalle.belongsTo(Color, { foreignKey: "idColor" })
Color.hasMany(CarritoDetalle, { foreignKey: "idColor" })

Pedido.belongsTo(Usuario, { foreignKey: "idUsuario" })
Usuario.hasMany(Pedido, { foreignKey: "idUsuario" })

Pedido.belongsTo(Estado, { foreignKey: "idEstado" })
Estado.hasMany(Pedido, { foreignKey: "idEstado" })

PedidoDetalle.belongsTo(Pedido, { foreignKey: "idPedido" })
Pedido.hasMany(PedidoDetalle, { foreignKey: "idPedido" })

PedidoDetalle.belongsTo(Producto, { foreignKey: "idProducto" })
Producto.hasMany(PedidoDetalle, { foreignKey: "idProducto" })

PedidoDetalle.belongsTo(Talle, { foreignKey: "idTalle" })
Talle.hasMany(PedidoDetalle, { foreignKey: "idTalle" })

PedidoDetalle.belongsTo(Color, { foreignKey: "idColor" })
Color.hasMany(PedidoDetalle, { foreignKey: "idColor" })

Producto.belongsTo(Categoria, { foreignKey: "idColor" })
Categoria.hasMany(Producto, { foreignKey: "idColor" })

Producto.belongsTo(Categoria, { foreignKey: "idCategoria" })
Categoria.hasMany(Producto, { foreignKey: "idCategoria" })

Producto.belongsTo(Talle, { foreignKey: "idTalle" })
Talle.hasMany(Producto, { foreignKey: "idTalle" })

Producto.belongsTo(Color, { foreignKey: "idColor" })
Color.hasMany(Producto, { foreignKey: "idColor" })

export{
    Carrito, 
    CarritoDetalle, 
    Categoria, 
    Color,
    Estado,
    EstadoPago,
    MetodoPago,
    Pago,
    Pedido,
    PedidoDetalle,
    Producto,
    Talle,
    Usuario
}
