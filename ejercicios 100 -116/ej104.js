const fibonacci = function () {
    let numero0 = 0;
let numero1 = 1;
let fin = 0;

while (fin < 10) {
  console.log(numero0);
  let siguiente = numero0 + numero1;
  numero0 = numero1;
  numero1 = siguiente;
  fin++;
}
}

fibonacci();
fibonacci();
fibonacci();