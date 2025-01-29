const jugador = {
    nombre: null,
    energia: 100,
    vidas: 3,

    mostrarEstado() {
        console.log(`El jugador ${this.nombre} tiene ${this.energia}% de energía y ${this.vidas} vidas`);
    },

    perderEnergia(danio) {
        if (danio < 0) {
            console.log('No se puede aplicar daño negativo');
            return;
        }
        this.energia = (this.energia - danio < 0) ? 0 : this.energia - danio;
        console.log(`${this.nombre} ha perdido ${danio} de energía`);
        this.mostrarEstado();
    },

    recuperarEnergia(energiaRecuperada) {
        if (energiaRecuperada < 0) {
            console.log('No se puede recuperar energía negativa');
            return;
        }
        this.energia = (this.energia + energiaRecuperada > 100) ? 100 : this.energia + energiaRecuperada;
        console.log(`${this.nombre} ha recuperado ${energiaRecuperada} de energía`);
        this.mostrarEstado();
    },

    perderVida() {
        if (this.vidas > 0) {
            this.vidas--;
            console.log(`${this.nombre} ha perdido una vida`);
        } else {
            console.log('No quedan vidas para perder');
        }
        this.mostrarEstado();
    },

    recuperarVida() {
        if (this.vidas < 99) {
            this.vidas++;
            console.log(`${this.nombre} ha recuperado una vida`);
        } else {
            console.log('No se pueden tener más de 99 vidas');
        }
        this.mostrarEstado();
    }
};

jugador.nombre = "Mario";

jugador.perderVida();
jugador.perderEnergia(10);
jugador.perderEnergia(5);
jugador.perderEnergia(15);
jugador.perderEnergia(20);
jugador.recuperarEnergia(10);
jugador.perderEnergia(30);
jugador.perderEnergia(40);
jugador.perderVida();
jugador.perderVida();
jugador.recuperarVida();
jugador.recuperarVida();
jugador.recuperarVida();
jugador.perderVida();