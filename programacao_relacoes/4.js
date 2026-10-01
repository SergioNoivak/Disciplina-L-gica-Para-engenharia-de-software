const bib = require('readline-sync');

const fazerLeituraDeConjunto = ()=>{
    const conjunto = [];
    while(true){
        let numero = +bib.questionInt(`Digite um numero para o conjunto: `);
        if(numero < 0){
            break;
        }
        conjunto.push(numero);
    }
    return conjunto
}

const fazerLeituraRelacao= () => {
    const relacao = [];
    while(true){
        let a = +bib.questionInt(`primeira coordenada do par ordenado: `);
        if(a < 0){
            break;
        }
        let b = +bib.questionInt(`segunda coordenada do par ordenado: `);
        if(b < 0){
            return []
            break;
        }
        relacao.push([a, b]);
    }
    return relacao;
}
const isRelacao = (conjuntoA, relacao) => {
    for (let i = 0; i < relacao.length; i++) {
        const parOrdenado = relacao[i];
        const a = parOrdenado[0];
        const b = parOrdenado[1];
        if(!conjuntoA.includes(a) || !conjuntoA.includes(b)){
            return false;
        }
    }
    return true;
}

const unirConjuntos = (conjuntoA, conjuntoB) => {   
    const uniao = [...conjuntoA, ...conjuntoB];
    return uniao;
}
const construirMatrizRelacao = (conjunto, relacao) =>{ const matrizRelacao = [];
    for (let i = 0; i < conjunto.length; i++) {
        const linha = [];
        for (let j = 0; j < conjunto.length; j++) {
            linha.push(0);
        }
        matrizRelacao.push(linha);
    } 
    for (let i = 0; i < relacao.length; i++) {
        const parOrdenado = relacao[i];
        const a = parOrdenado[0];
        const b = parOrdenado[1];
        const indiceA = conjunto.indexOf(a);
        const indiceB = conjunto.indexOf(b);
        matrizRelacao[indiceA][indiceB] = 1;
    }
    return matrizRelacao;
}

const conjuntoA = fazerLeituraDeConjunto();
const conjuntoB = fazerLeituraDeConjunto();  
const relacao = fazerLeituraRelacao();
if(isRelacao(conjuntoA, relacao)){
    console.log("A relação é válida.");
    const uniao = unirConjuntos(conjuntoA, conjuntoB);     
    const matrizRelacao = construirMatrizRelacao(uniao, relacao);
    console.log("Matriz da relação:");
    for (let i = 0; i < matrizRelacao.length; i++) {
        console.log(matrizRelacao[i]);
    }   
}   else{
    console.log("A relação é inválida.");
}