function mejorJugadorArgentino(numero) {
    const jugadores = {
      18: "Nery Pumpido",
      5: "José Luis Brown",
      9: "José Cuciuffo",
      19: "Óscar Ruggeri",
      14: "Ricardo Giusti",
      16: "Julio Olarticoechea",
      2: "Sergio Batista",
      12: "Héctor Enrique",
      7: "Jorge Burruchaga",
      10: "Diego Armando Maradona",
      11: "Jorge Valdano"
    };
  
    if (jugadores[numero]) {
      console.log(numero + ", " + jugadores[numero]);
      return jugadores[numero];
    } else {
      console.log(numero + ", Carlos Bilardo");
      return "Carlos Bilardo";
    }
  }

mejorJugadorArgentino('10');
  