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

let mutantesFiltrados = mutantes.filter(function (mutante) {
    return mutante !== "Scott Summers";
});

console.log(mutantes[1]);
console.log(mutantesFiltrados[1]);