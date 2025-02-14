export function mostrarNumeros(inicio,fin) {
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

export const inicio = 0;
export const fin = 100;
