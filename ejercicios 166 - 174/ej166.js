const usuario = {
    nombre: 'Maria'
}

function isUserValid() {
    if (usuario.nombre === 'Maria') {
        console.log('Exito!')
    } else {
        console.log('Error')
    }
}

isUserValid()