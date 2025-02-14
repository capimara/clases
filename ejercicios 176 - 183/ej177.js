function saludar() {
    function crearSaludo(nombre) {
        return `¡Hola ${nombre}!`;
    }

    console.log(crearSaludo("Nicolas"));
    console.log(crearSaludo("Natalia"));
    console.log(crearSaludo("Javier"));
    console.log(crearSaludo("Ana"));
}

saludar();