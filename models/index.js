import { Categorias } from "./categoria.js";
import { DetallesVentas } from "./detallesVentas.js";
import { Productos } from "./producto.js";
import { Roles } from "./rol.js";
import { Usuario } from "./usuario.js";
import { Ventas } from "./ventas.js";


// Relacion de mis modelos Categorias a Productos
Categorias.hasMany(Productos, {
    foreignKey: 'categoria_id',
});

Productos.belongsTo(Categorias, {
    foreignKey: 'categoria_id'
});

// Relacion de mis modelos Productos a Usuarios
Productos.belongsTo(Usuario, {
    foreignKey: 'usuario_id'
});

Roles.hasMany(Usuario, {
    foreignKey: 'role_id'
});

// Relacion de mis modelos Usuarios a Roles
Usuario.belongsTo(Roles, { 
    foreignKey: 'role_id',
});

// Relacion de mis modelos Ventas a Usuarios
Ventas.belongsTo(Usuario,{
    foreignKey:'usuario_id'
});

Usuario.belongsTo(Ventas, {
    foreignKey: 'usuario_id'
});

// Relacion de mis modelos DetallesVentas a Productos
DetallesVentas.belongsTo(Productos, {
    foreignKey : "producto_id"  //Relación con la tabla productos
});

Productos.belongsTo(DetallesVentas, {
    foreignKey:"producto_id",   //Relación con la tabla ventas
});

// Relacion de mis modelos DetallesVentas a Ventas
DetallesVentas.belongsTo(Ventas, {
    foreignKey :"venta_id",    //Relación con la tabla detalles-ventas
});

Ventas.belongsTo(DetallesVentas, {
    foreignKey: "venta_id",     //Relación con la tabla venta
})


 
export {Categorias, Productos, Roles, Usuario, Ventas};