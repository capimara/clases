const persona = {
    nombre: "Nicolas",
    saludar: function () {
      console.log(this);  // 'this' aquí hace referencia al objeto 'persona'.
      console.log(this.nombre); // 'this.nombre' se refiere a la propiedad 'nombre' dentro del objeto 'persona'.
    },
    saludar2: () => {
      console.log(this); // 'this' en una arrow function no hace referencia al objeto 'persona'.
      // En su lugar, 'this' aquí se refiere al contexto en el que fue definida la función, que en este caso sería el objeto global.
    },
  };

// En una función normal, 'this' hace referencia al objeto al que pertenece la función.
// En una arrow function, 'this' mantiene el valor del contexto en el que se definió, no el objeto donde está.
// En este caso, 'saludar' sí puede acceder a 'persona.nombre', pero 'saludar2' no, porque 'this' en una arrow function no se asocia a 'persona'.