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
const produtoCartesiano = (conjuntoA, conjuntoB) => {
const produtoCartesiano = [];

for (let i = 0; i < conjuntoA.length; i++) {
    const a = conjuntoA[i];
    for (let j = 0; j < conjuntoB.length; j++) {
        const b = conjuntoB[j];
        produtoCartesiano.push([a, b]);
    }
}
return produtoCartesiano;

}
const uniaoDeDoisConjuntos = (conjuntoA, conjuntoB) => {
    const uniao = [...conjuntoA, ...conjuntoB];
    return uniao;
}

fazerLeitura(conjuntoA, "A");
fazerLeitura(conjuntoB, "B");
const uniao = uniaoDeDoisConjuntos(produtoCartesiano(conjuntoA, conjuntoB), produtoCartesiano(conjuntoB, conjuntoA))
console.log("União do produto cartesiano:",uniao);