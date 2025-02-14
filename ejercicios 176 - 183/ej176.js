// Ejemplo 1
/*
Esto va a mostrar undefined
Porque estamos intentando usar numero1 antes de darle un valor.
*/
console.log(numero1);
var numero1 = 10;

// Ejemplo 2
/*
Va a mostrar "Hola Mundo!"
*/
saludar();
function saludar() {
  console.log("Hola Mundo!");
}

// Ejemplo 3
/*
Cuando usamos 'let', JavaScript es más estricto.
No puedes usar numero2 antes de crearlo.
*/
// console.log(numero2);
// let numero2 = 20;

// Ejemplo 4
/*
Primero muestra: undefined
Luego muestra: 5
*/
function prueba() {
  console.log(numero3);  // La variable existe pero está vacía
  var numero3 = 5;      // Aquí le damos el valor
  console.log(numero3);  // Ahora sí tiene el valor 5
}
prueba();

// Ejemplo 5
/*
¡Error!
Con var saludar = function() es diferente a function saludar().
Es como tratar de usar una herramienta antes de construirla.
*/
// saludar();
// var saludar = function() {
//   console.log("Hola Mundo!");
// };

// Ejemplo 6
/*
¡Error!
Igual que en el ejemplo 3, no podemos usar numero4
antes de crearlo con let.
*/
// {
//   console.log(numero4);
//   let numero4 = 15;
// }