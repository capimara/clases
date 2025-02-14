function crearMultiplicador(numero1) {
    return function (numero2) {
        return numero1 * numero2;
        
    };
  };

const resultado = crearMultiplicador(3)(5);
console.log(resultado)