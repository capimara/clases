const animales = ["perro", "vaca", "pato", "leon", "delfin", "elefante"];
const animalesComoString = animales.reduce(function(
valorRetorno, animal, index
) {
if (index === animales.length - 1) {
return valorRetorno + animal;
}
return valorRetorno + animal + ", ";
},

"");

console.log(animalesComoString);


for (let i = 0; i < alumnas.length; i++) {
  let indice = alumnas.indexOf(alumnas[i]);
  console.log(`${indice} ${alumnas[indice]}`);
}

// Crear un string con los nombres de todos los mutantes unidos por comas
const nombresUnidos = mutantes.reduce((acumulador, nombre, indice) => {
  // Si no es el último elemento, agrega una coma
  if (indice < mutantes.length - 1) {
      return acumulador + nombre + ", ";
  } else {
      // Si es el último elemento, no agrega una coma
      return acumulador + nombre;
  }
}, ""); // El valor inicial del acumulador es un string vacío

// Mostrar en consola el nuevo string creado
console.log(nombresUnidos);