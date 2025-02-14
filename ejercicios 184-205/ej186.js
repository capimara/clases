function crearPromesa(mensaje) {
    return new Promise((onSuccess) => {
        onSuccess(mensaje);
    });
}

const promesa = crearPromesa('¡La promesa se resolvió exitosamente!');

promesa.then((mensaje) => {
    console.log(mensaje);
});