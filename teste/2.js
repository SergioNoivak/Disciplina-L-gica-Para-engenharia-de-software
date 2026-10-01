const biblioteca = require('readline-sync');

const lerConjunto = (conjunto) => {
    console.log(`vetor ${conjunto}: `);
    const arr = []
    while (true) {
        let numero = +biblioteca.questionInt('Digite um numero: ');
        if (numero >= 0) {
            arr.push(numero);
        } else {
            break;
        }
    }
    return arr;

}
const produtoCartesiano = (A,B) => {
    const arr = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            arr.push([A[i], B[j]]);
        }
    }
    return arr;
}
const uniao = (A,B) => {    
    return [...new Set([...A, ...B])];

}

const A = lerConjunto('A');
const B = lerConjunto('B');
console.log('Uniao do produto cartesiano:');
console.log(uniao(produtoCartesiano(A, B), produtoCartesiano(B, A)));