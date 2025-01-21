let mensaje = '3.14 es un gran numero, pero mejor es 42 que le da significado a la vida';
const pi = parseFloat(mensaje.slice(0,4));
const significadoDeLaVida = parseInt(mensaje.substr(38,2));
const resultado = pi + significadoDeLaVida;

console.log(resultado);
console.log(resultado.toString() + ' es el resultado de sumar las variables ' + pi.toString() + ' y ' +  significadoDeLaVida.toString());