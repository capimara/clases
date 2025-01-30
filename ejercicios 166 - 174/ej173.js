function dividir(numero1,numero2) {
    if (numero2 === 0) {
        throw new Error("No se puede dividir por 0");
    }
    return numero1 / numero2;
    
}

try {
    console.log(dividir(10, 2));
    console.log(dividir(10, 0));
    console.log(dividir(15, 3));
} catch (error) {
    console.error(error.message);
}
