let numero0 = 0;
let numero1 = 1;
let contador = 0;

do  {
    console.log(numero0);
    let siguiente = numero0 + numero1;
    numero0 = numero1;
    numero1 = siguiente;
    contador++;
} while (contador < 10)