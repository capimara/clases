function autenticarUsuario(usuario, password) {
    const usuariosValidos = {
        "nacho": "Nerd1979",
        "pedro": "Batman0217",
        "marta": "Madre2312"
    };
    if (usuariosValidos[usuario] && usuariosValidos[usuario] === password) {
        console.log(`Bienvenido ${usuario}, te estabamos esperando`);
    return true;
    } else {
        console.log("Por favor ingrese credenciales válidas");
    return false;
    }
}

autenticarUsuario("nacho","Nerd1979")