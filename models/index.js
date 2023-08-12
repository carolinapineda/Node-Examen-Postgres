import { Categorias } from "./categoria.js";
import { Productos } from "./producto.js";
import { Roles } from "./rol.js";
import { Usuario } from "./usuario.js";


// Relacion de mis modelos
Categorias.hasMany(Productos, {
    foreignKey: 'categoria_id'
});

Productos.belongsTo(Usuario, {
    foreignKey: 'usuario_id'
});

Roles.hasMany(Usuario, {
    foreignKey: 'role_id'
});
Usuario.belongsTo(Roles, { 
    foreignKey: 'role_id',
    // as: 'nombre'
});

 
export {Categorias, Productos, Roles, Usuario};