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

let mutantesModificados = [...mutantes];

mutantesModificados = mutantesModificados.map(function(mutante) {
    if (mutante === "Prof. Charles Francis Xavier" || 
        mutante === "Jean Elaine Grey" || 
        mutante === "James \"Logan\" Howlett") {
        return `<3 ${mutante}`;
    }
    return mutante;
});

console.log(mutantes, mutantesModificados);
