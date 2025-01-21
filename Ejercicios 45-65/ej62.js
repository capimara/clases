const numeroDeMes = 12;
let nombreDelMes = null;
let cantidadDeDias = null;

switch (numeroDeMes) {
    case 1:
      nombreDelMes = "Enero";
      cantidadDeDias = '31 dias';
      break;
    case 2:
      nombreDelMes = "Febrero";
      cantidadDeDias = '28/29 dias';
      break;
    case 3:
      nombreDelMes = "Marzo";
      cantidadDeDias = '31 dias';
      break;
    case 4:
      nombreDelMes = "Abril";
      cantidadDeDias = '30 dias';
      break;
    case 5:
      nombreDelMes = "Mayo";
      cantidadDeDias = '31 dias';
      break;
    case 6:
      nombreDelMes = "Junio";
      cantidadDeDias = '30 dias';
      break;
    case 7:
      nombreDelMes = "Julio";
      cantidadDeDias = '31 dias';
      break;
    case 8:
      nombreDelMes = "Agosto";
      cantidadDeDias = '31 dias';
      break;
    case 9:
      nombreDelMes = "Septiembre";
      cantidadDeDias = '30 dias';
      break;
    case 10:
      nombreDelMes = "Octubre";
      cantidadDeDias = '31 dias';
      break;
    case 11:
      nombreDelMes = "Noviembre";
      cantidadDeDias = '30 dias';
      break;
    case 12:
      nombreDelMes = "Diciembre";
      cantidadDeDias = '31 dias';
      break;
    default:
      nombreDelMes = null;
      cantidadDeDias = null;
  }

  if (numeroDeMes === null) {
    console.log('Ingrese un número entre 1 y 12')
  } else {
    console.log (`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} de días`)
  }