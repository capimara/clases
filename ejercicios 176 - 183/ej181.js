function crearMultiplicador(factor) {
    return function(input) {
        return factor * input;
    }
}

const doble = crearMultiplicador(2);
console.log("2 * 10 =", doble(10)); 

const triple = crearMultiplicador(3);
console.log("3 * 4 =", triple(4))