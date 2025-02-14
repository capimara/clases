const estadoProfesor = {
    nombre: "Nicolas",
    apellido: "Isnardi",
    amigos: ["Juan", "Pablo", "Char"],
    leGustaJavaScript: true,
  };
  
  const estadoAlumno = {
    nombre: "Maria",
    apellido: "Cabrera",
    amigos: ["Oda", "Cami", "Sarah"],
    leGustaJavaScript: true,
  };
  
  const nuevoEstado = {
    ...estadoProfesor,
    ...estadoAlumno
  };
  
  console.log(nuevoEstado);
  