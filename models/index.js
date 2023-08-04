import { Categorias } from "./categoria.js";
import { Productos } from "./producto.js";
import { Roles } from "./rol.js";
import { Usuario } from "./usuario.js";


// Relacion de mis modelos
Categorias.hasMany(Productos);

Productos.belongsTo(Usuario);

Roles.hasMany(Usuario);

 
export {Categorias, Productos, Roles, Usuario};