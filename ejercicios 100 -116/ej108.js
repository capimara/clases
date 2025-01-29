const ordenarNumeros = function (numero1, numero2, numero3, descendente = false) {
    let menor, medio, mayor;
    
    if (numero1 <= numero2 && numero1 <= numero3) {
        menor = numero1;
        medio = numero2 <= numero3 ? numero2 : numero3;
        mayor = numero2 <= numero3 ? numero3 : numero2;
    } else if (numero2 <= numero1 && numero2 <= numero3) {
        menor = numero2;
        medio = numero1 <= numero3 ? numero1 : numero3;
        mayor = numero1 <= numero3 ? numero3 : numero1;
    } else {
        menor = numero3;
        medio = numero1 <= numero2 ? numero1 : numero2;
        mayor = numero1 <= numero2 ? numero2 : numero1;
    }
    
    if (descendente) {
        console.log(`${mayor}, ${medio}, ${menor}`);
    } else {
        console.log(`${menor}, ${medio}, ${mayor}`);
    }
};

ordenarNumeros(10, 8, 25);
ordenarNumeros(10, 8, 25, true)