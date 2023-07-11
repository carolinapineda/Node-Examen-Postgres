import { Categorias } from "./categoria.js";
import { Productos } from "./producto.js";
import { Roles } from "./rol.js";
import { Usuario } from "./usuario.js";


Usuario.hasMany(Productos, {
    foreignKey: 'usuarioId', 
    sourceKey: 'id'
});

// belongsTo relacion de uno a uno
Productos.belongsTo(Usuario, {
    foreignKey: 'usuarioId',
    sourceKey: 'id'
});

Usuario.belongsTo(Roles, {
    foreignKey: 'roleId',
    sourceKey: 'id'
});

// belongsTo relacion de uno a uno
Roles.belongsTo(Usuario, {
    foreignKey: 'usuarioId',
    sourceKey: 'id'
});

Categorias.belongsTo(Productos, {
    foreignKey: 'categoriaId', 
    sourceKey: 'id'
});

Productos.hasMany(Categorias, {
    foreignKey: 'categoriaId',
    sourceKey: 'id'
});

export default {Usuario, Categorias, Productos, Roles};