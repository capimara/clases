function obtenerPerimetroRectangulo(base, altura) {
    let perimetro;
  
    if (base === altura) {
      perimetro = base * 4; 
    } else {
      perimetro = 2 * (base + altura); 
    }
  
    if (perimetro > 100) {
      console.log("El perímetro es muy grande");
    } else {
      console.log("Este perímetro no es muy grande");
    }
  
    console.log(`El perímetro es ${perimetro}`); 
  
    return perimetro;
  }
  obtenerPerimetroRectangulo(10, 10);
  obtenerPerimetroRectangulo(10, 20);
  obtenerPerimetroRectangulo(50, 50);
  obtenerPerimetroRectangulo(10, 100);