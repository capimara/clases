function cantidadDeCaracteres(texto) {
    let textoSeguro = texto || "";
    
    console.log(`El texto tiene ${textoSeguro.length} caracteres`);
}

cantidadDeCaracteres("perro");

cantidadDeCaracteres("");

cantidadDeCaracteres(undefined);