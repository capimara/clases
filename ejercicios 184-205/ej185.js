let contador = 1;

console.log('Inicio');

const timer = setInterval(() => {
    if (contador < 10) {
        if (contador === 1) {
            console.log('Paso 1 segundo.');
        } else {
            console.log(`Pasaron ${contador} segundos.`);
        }
    } else {
        console.log('Fin del contador, pasaron 10 segundos');
        clearInterval(timer);
    }
    contador++;
}, 1000);


console.log('Asteriscos!!');

let asteriscos = 1;

const timerAsteriscos = setInterval(() => {
    console.log('*'.repeat(asteriscos));
    
    if (asteriscos === 10) {
        clearInterval(timerAsteriscos);
    }
    
    asteriscos++;
}, 1000);