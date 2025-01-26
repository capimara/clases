for (let i = 0, suma = 0, pares = 0; i <= 1000; i++) {
    if (i % 2 === 0) {
        suma += i;
        pares++;
        
        if (pares === 10) {
            console.log(suma);
            break;
        }
    }
}