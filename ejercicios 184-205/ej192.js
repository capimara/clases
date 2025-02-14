async function obtenerPokemones() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        
        data.results.forEach(pokemon => {
            const nombre = pokemon.name;
            const nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.substring(1);
            console.log(`* Pokemon: ${nombreCapitalizado}`);
        });
    } catch (error) {
        console.log('Error al obtener los Pokemones:', error.message);
    }
}

obtenerPokemones();