let alumnas = ["Ana", "Laura", "Sofia", "Maria", "Valentina"];
let alumnos = ["Juan", "Pedro", "Luis", "Carlos", "Miguel"];

let todosLosAlumnos = alumnas.concat(alumnos);

console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

let i = 0;
while (i < alumnos.length) {
  console.log(alumnos[i]);
  i++;
}

for (let i = 0; i < todosLosAlumnos.length; i++) {
  console.log(todosLosAlumnos[i]);
}