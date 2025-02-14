const persona = {
    nombre: "Maria",
    apellido: "Cabrera",
    edad: 28,
    ocupacion: "Estudiante",
    saludar() {
      console.log(`Hola ${this.nombre} ${this.apellido}`);
    },
    despedirse() {
      console.log(`Adiós, hasta luego ${this.nombre}`);
    },
    presentarse() {
      console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy ${this.ocupacion}.`);
    }
  };
  
  for (const propiedad in persona) {
    if (typeof persona[propiedad] === "function") {
      persona[propiedad]();
    } else {
      console.log(`${propiedad}: ${persona[propiedad]}`);
    }
  }