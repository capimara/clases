function mostrarNumeros(inicio,fin) {
    if(typeof inicio !== 'number' || typeof fin !== 'number') {
        console.log('los parametros tienen que ser numericos')
        return;
    }

    if (inicio === fin){
        console.log(`ambos parametros son ${inicio}`)
        return;
    }

    if(inicio < fin) {
       for(let numero = inicio; numero <= fin; numero++) {
        console.log(numero);
       }
    } else {
        for (let numero = inicio; numero >= fin; numero--)
            console.log(numero);
    }
}

mostrarNumeros(0,1000)
mostrarNumeros(1000,0)
mostrarNumeros(100,100)
mostrarNumeros('100',300)