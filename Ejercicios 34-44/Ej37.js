const promedioParaAprobar = 6;
const promedioDelAlumno = 4;

const aprobo = promedioDelAlumno >= promedioParaAprobar;
const puntosFaltantes = promedioParaAprobar - promedioDelAlumno;

console.log('El alumno tiene un promedio mayor o igual que el requerido:', aprobo);
console.log(`Al alumno le faltaron ${puntosFaltantes} puntos para aprobar`);