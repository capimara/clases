const contador = (function () {
    let acumulador = 0;
  
    return {
      increment: function () {
        acumulador++;
      },
      decrement: function () {
        acumulador--;
      },
      reset: function () {
        acumulador = 0;
      },
      getCount: function () {
        return acumulador;
      },
    };
  })();
  
  contador.increment();
  console.log(contador.getCount()); 
  
  contador.increment();
  console.log(contador.getCount()); 
  
  contador.decrement();
  console.log(contador.getCount()); 
  
  contador.reset();
  console.log(contador.getCount()); 

  try {
    console.log(acumulador);
  } catch (error) {
    console.log("No se puede acceder a la variable acumulador desde fuera de la función IIFE.");
  }