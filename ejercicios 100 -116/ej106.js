const obtenerIDUsuario = function () {
    return 50;
};

const usuarioValido = function () {
    const idUsuario = obtenerIDUsuario();
    return idUsuario <= 30;
};

if (usuarioValido()) {
    console.log("El usuario es válido");
} else {
    console.log("El usuario no es válido");
}