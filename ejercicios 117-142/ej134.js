const numeros = [];
let suma = 0;

for (let i = 0; i <= 10000; i++) {
    numeros.push(i);
    suma += i;
    console.log(`${suma}`);
}

console.log(`Suma total: ${suma}`);


if (suma === 50005000) {
    console.log("El ejercicio es correcto");
} else {
    console.log("Verificar el ejercicio para obtener el resultado esperado!!!");
}
