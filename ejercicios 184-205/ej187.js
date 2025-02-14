let tieneError = true;

function crearPromesa() {
    return new Promise((onSuccess, onError) => {
        if (tieneError) {
            onError('La promesa no se pudo cumplir');
        } else {
            onSuccess('¡La promesa se cumplió exitosamente!');
        }
    });
}

const promesa = crearPromesa();

promesa
    .then((mensaje) => {
        console.log('Éxito:', mensaje);
    })
    .catch((error) => {
        console.log('Error:', error);
    });
