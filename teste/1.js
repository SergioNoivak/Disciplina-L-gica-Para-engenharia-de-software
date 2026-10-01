const biblioteca = require('readline-sync');
const A = [];
const B = [];

console.log('vetor A: ');
while(true){
    let numero = +biblioteca.questionInt('Digite um numero: ');
    if(numero >=0){
        A.push(numero);
    }else{
        break;
    }
}
console.log('vetor B: ');
while(true){
    let numero = +biblioteca.questionInt('Digite um numero: ');
    if(numero >=0){
        B.push(numero);
    }else{
        break;
    }
}
const produtoCartesiano = [];
for(let i = 0; i < A.length; i++){
    for(let j = 0; j < B.length; j++){
        produtoCartesiano.push([A[i], B[j]]);
    }
}
console.log('Produto Cartesiano:');
console.log(produtoCartesiano);