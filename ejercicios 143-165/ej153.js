const aritmetica = {
    validarNumeros(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            console.log('Error: Los parámetros deben ser números');
            return false;
        }
        return true;
    },

    suma(a, b) {
        if (!this.validarNumeros(a, b)) return;
        const resultado = a + b;
        console.log(`${a} + ${b} = ${resultado}`);
        return resultado;
    },

    resta(a, b) {
        if (!this.validarNumeros(a, b)) return;
        const resultado = a - b;
        console.log(`${a} - ${b} = ${resultado}`);
        return resultado;
    },

    multiplicar(a, b) {
        if (!this.validarNumeros(a, b)) return;
        const resultado = a * b;
        console.log(`${a} * ${b} = ${resultado}`);
        return resultado;
    },

    dividir(a, b) {
        if (!this.validarNumeros(a, b)) return;
        if (b === 0) {
            console.log('Error: No es posible dividir por cero');
            return;
        }
        const resultado = a / b;
        console.log(`${a} / ${b} = ${resultado}`);
        return resultado;
    },

    mostrarModulo(a, b) {
        if (!this.validarNumeros(a, b)) return;
        if (b === 0) {
            console.log('Error: No es posible calcular el módulo con divisor cero');
            return;
        }
        const resultado = a % b;
        console.log(`${a} % ${b} = ${resultado}`);
        return resultado;
    }
};

aritmetica.suma(2, 10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);