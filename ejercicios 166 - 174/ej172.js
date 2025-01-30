function crearMultiplicador(numero1) {
    return function (numero2) {
        return numero1 * numero2;

    };
  };

  console.log(crearMultiplicador(3)(5))