const mascota: {
    nombre: string;
    edad: number;
    fechaDeNacimiento?: string;
} = {
    nombre: "Domador de mundos",
    edad: 5
};

function mostrarDatosMascota(mascota: { 
    nombre: string; 
    edad: number; 
    fechaDeNacimiento?: string; 
}) {
    if (mascota.fechaDeNacimiento) {
        console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`);
    }
    console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad}`);
}

mostrarDatosMascota(mascota);

const mascotaConFecha: {
    nombre: string;
    edad: number;
    fechaDeNacimiento?: string;
} = {
    nombre: "Domador de mundos",
    edad: 5,
    fechaDeNacimiento: "2019-01-15"
};

mostrarDatosMascota(mascotaConFecha);