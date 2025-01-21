let dia = 3;
let nombreDelMes = null;

switch (dia) {
  case 1:
    nombreDelMes = "Lunes";
    break;
  case 2:
    nombreDelMes = "Martes";
    break;
  case 3:
    nombreDelMes = "Miércoles";
    break;
  case 4:
    nombreDelMes = "Jueves";
    break;
  case 5:
    nombreDelMes = "Viernes";
    break;
  case 6:
    nombreDelMes = "Sábado";
    break;
  case 7:
    nombreDelMes = "Domingo";
    break;
  default:
    nombreDelMes = null;
}

if (nombreDelMes !== null) {
  console.log(`El día seleccionado es ${nombreDelMes}`);
} else {
  console.log("Por favor seleccionar un número de 1 a 7");
}

if (dia === 1) {
    nombreDelMes = "Lunes";
  } else if (dia === 2) {
    nombreDelMes = "Martes";
  } else if (dia === 3) {
    nombreDelMes = "Miércoles";
  } else if (dia === 4) {
    nombreDelMes = "Jueves";
  } else if (dia === 5) {
    nombreDelMes = "Viernes";
  } else if (dia === 6) {
    nombreDelMes = "Sábado";
  } else if (dia === 7) {
    nombreDelMes = "Domingo";
  } else {
    nombreDelMes = null;
  }
  
  if (nombreDelMes !== null) {
    console.log(`El día seleccionado es ${nombreDelMes}`);
  } else {
    console.log("Por favor seleccionar un número de 1 a 7");
  }