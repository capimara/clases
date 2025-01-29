function saludar(mensaje, despedida) {
    console.log(mensaje); 
  
    despedida(mensaje); 
  }
  
  saludar("Bienvenidos a JavaScript", function() {
    console.log("¡Hasta luego!"); 
  });