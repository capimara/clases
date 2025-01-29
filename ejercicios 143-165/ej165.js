const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function map(coleccion, funcion) {
  const resultado = []; 

  for (let i = 0; i < coleccion.length; i++) {
    resultado.push(funcion(coleccion[i])); 
  }

  return resultado;
}

const numerosMultiplicados = map(numeros, function(numero) {
  return numero * 2;
});

console.log(numerosMultiplicados);