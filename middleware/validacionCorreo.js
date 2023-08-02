
export const correoElectronico = (correo) =>{
    
    const validacion = /^[a-zA-Z0-9.-_]+@gmail\.com$/;
    return validacion.test(correo);
};

