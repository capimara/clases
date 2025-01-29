let gustosHelado = ['chocolate granizado', 'mascarpone', 'vainilla', 'frambuesa', 'kinder', 'maracuya', 'chocolate amargo', 'tiramisu', 'cereza', 'sambayon'];

let ultimo = gustosHelado.pop();
let primero = gustosHelado.shift();
gustosHelado.unshift(ultimo);
gustosHelado.push(primero);

let cantidadDeGustos = gustosHelado.unshift('dulce de leche', 'crema del cielo');

let gustosSinStock = [];

gustosSinStock.push(gustosHelado.shift());
gustosSinStock.push(gustosHelado.shift());

console.log("Gustos disponibles:", gustosHelado);
console.log("Gustos sin stock:", gustosSinStock);