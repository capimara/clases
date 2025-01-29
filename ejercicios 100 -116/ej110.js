function promedio(nota1, nota2, nota3, nota4, nota5) {
    let sumaNotas = nota1 + nota2 + nota3 + nota4 + nota5;
    let promedio = sumaNotas / 5;
    console.log("El promedio de la cursada es:", promedio);
    return promedio;
}

promedio(6,9,8,3,7)