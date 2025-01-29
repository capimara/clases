let mutantes = [
    "Prof. Charles Francis Xavier",
    "Scott Summers",
    "Dr. Henry Philip \"Hank\" McCoy",
    "Jean Elaine Grey",
    "Calvin Montgomery Rankin",
    "Kevin Sydney",
    "Lorna Sally Dane",
    "Alexander Summers",
    "Suzanne Chan",
    "James \"Logan\" Howlett",
    "Ororo Monroe"
];

const nombresUnidos = mutantes.reduce(function (acumulador, nombre, indice) {
    if (indice < mutantes.length - 1) {
        return acumulador + nombre + ", ";
    } else {
        return acumulador + nombre;
    }
}, ""); 

console.log(nombresUnidos);