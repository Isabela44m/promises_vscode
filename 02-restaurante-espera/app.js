// EXEMPLO 02 - Restaurante: um pedido leva tempo
console.log("1. Cliente fez o pedido");

const pedido = new Promise((resolve) => {
// Simulamos uma espera de aproximadamente dois segundos.
setTimeout(() => {
resolve("Hambúrguer pronto!");
}, 2000);
});

// A funcão do then sera chamada quando o pedido ficar pronto.
pedido.then((comida) => {
console.log("3. Recebi:", comida);
});

// 0 programa continua executando, sem aguardar o temporizador.
console.log("2. Garçom atende outra mesa");

