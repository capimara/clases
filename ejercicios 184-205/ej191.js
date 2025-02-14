fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(pokemon => {
            const nombre = pokemon.name;
            const nombrePoke = nombre.charAt(0).toUpperCase() + nombre.substring(1);
            console.log(`* Pokemon: ${nombrePoke}`);
        });
    })
    .catch(error => {
        console.log('Error al obtener los Pokemones:', error.message);
    });