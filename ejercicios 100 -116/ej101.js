function datos() {
    let nombre = 'Maria', edad = 28, telefono = '1173646409';
    let calle = 'planes', altura = 1074, codigoPostal = 'no se', casada = false; 
    if (casada === false) {
    console.log(`Mi nombre es ${nombre} y tengo ${edad}, mi telefono es ${telefono}, vivo en ${calle} al ${altura} y mi codigo postal es ${codigoPostal} y no estoy casada`)
    } else {
        console.log(`Mi nombre es ${nombre} y tengo ${edad}, mi telefono es ${telefono}, vivo en ${calle} al ${altura} y mi codigo postal es ${codigoPostal} y estoy casada`)   
    }
}

datos()
