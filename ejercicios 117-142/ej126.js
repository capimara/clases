let gustosHelado = ['chocolate granizado', 'mascarpone', 'vainilla', 'frambuesa', 'kinder', 'maracuya', 'chocolate amargo', 'tiramisu', 'cereza', 'sambayon'];

let ultimo = gustosHelado.pop();
let primero = gustosHelado.shift();
gustosHelado.unshift(ultimo);
gustosHelado.push(primero);
console.log(gustosHelado);

let cantidadDeGustos = gustosHelado.unshift('dulce de leche', 'crema del cielo')
console.log(gustosHelado);