let usuario = {
    username: null,
    password: null,
    
    saludar: function() {
        if (this.username) {
            console.log(`Hola, soy el usuario ${this.username}`);
        } else {
            console.log("Este usuario no tiene username");
        }
    },
    
    updateUsername: function(nombre) {
        this.username = nombre;
    },
    
    updatePassword: function(clave) {
        this.password = clave;
    }
};

usuario.updateUsername("JuanPerez");
usuario.updatePassword("ClaveSecreta123");

usuario.saludar();
console.log("Password:", usuario.password);
