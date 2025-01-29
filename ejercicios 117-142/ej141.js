const gastos = [100, 1000, 200];

const totalGastos = gastos.reduce(function (total, gasto) {
    return total + gasto;
}, 0);

console.log(`Vamos a gastar $${totalGastos}`);