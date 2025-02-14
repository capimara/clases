var mascota = {
    nombre: "Domador de mundos",
    edad: 5
};
function mostrarDatosMascota(mascota) {
    if (mascota.fechaDeNacimiento) {
        console.log("La mascota naci\u00F3 en ".concat(mascota.fechaDeNacimiento));
    }
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad));
}
mostrarDatosMascota(mascota);
var mascotaConFecha = {
    nombre: "Domador de mundos",
    edad: 5,
    fechaDeNacimiento: "2019-01-15"
};
mostrarDatosMascota(mascotaConFecha);
