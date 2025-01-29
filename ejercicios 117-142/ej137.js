let numeros = [];

for (let i = 0; i <= 100; i++) {
    numeros.push(i);
}

let numerosIncrementados = numeros.map(function (num) {
    return num + 10;
});

for (let i = 0; i < 10; i++) {
    console.log(`${i} - Valor original: ${numeros[i]}, Valor incrementado: ${numerosIncrementados[i]}`);
}