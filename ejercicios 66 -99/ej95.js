let numero0 = 0;
let numero1 = 1;
console.log(numero0)
console.log(numero1)

for (let fin = 0; fin < 8; fin++) {
   let siguiente = numero0 + numero1;
   console.log(siguiente)
   numero0 = numero1;
   numero1 = siguiente;
}