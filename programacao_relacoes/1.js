const bib = require('readline-sync');
let conjuntoA = [];
let conjuntoB = [];

const fazerLeitura = (conjunto, nomeConjunto)=>{

    while(true){
        let numero = +bib.questionInt(`Digite um numero para o conjunto ${nomeConjunto}: `);
        if(numero < 0){
            break;
        }
        conjunto.push(numero);
    }
}
fazerLeitura(conjuntoA, "A");
fazerLeitura(conjuntoB, "B");
const produtoCartesiano = [];

for (let i = 0; i < conjuntoA.length; i++) {
    const a = conjuntoA[i];
    for (let j = 0; j < conjuntoB.length; j++) {
        const b = conjuntoB[j];
        produtoCartesiano.push([a, b]);
    }
}
console.log("Produto Cartesiano:", produtoCartesiano);