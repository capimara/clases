const animales = ['perro', 'gato', 'delfin', 'elefante'];

const animalesEnMayusculas = animales.map(animal => animal.toUpperCase());

console.log('Animales:');
animalesEnMayusculas.forEach(animal => console.log(`- ${animal}`));