const bib = require('readline-sync');
let conjuntoA = [];

const fazerLeituraDeConjunto = (conjunto, nomeConjunto)=>{

    while(true){
        let numero = +bib.questionInt(`Digite um numero para o conjunto ${nomeConjunto}: `);
        if(numero < 0){
            break;
        }
        conjunto.push(numero);
    }
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
const verificarReflexiva = (conjunto, relacao) =>{
    const matrizRelacao = construirMatrizRelacao(conjunto, relacao);    
    // Verificar reflexividade
    for (let i = 0; i < conjunto.length; i++) {
        if (matrizRelacao[i][i] !== 1) {
            return false;
        }
    }
    return true;
}

const verificarSimetrica = (conjunto, relacao) =>{
    const matrizRelacao = construirMatrizRelacao(conjunto, relacao);
    for (let i = 0; i < matrizRelacao.length; i++) {
        for (let j = 0; j < matrizRelacao[i].length; j++) {
            if (matrizRelacao[i][j] === 1 && matrizRelacao[j][i] !== 1) {
                return false;
            }
        }
    }
    return true;
}

const verificarAntiSimetrica = (conjunto, relacao) =>{
    const matrizRelacao = construirMatrizRelacao(conjunto, relacao);
    for (let i = 0; i < matrizRelacao.length; i++) {
        for (let j = 0; j < matrizRelacao[i].length; j++) {
            if (matrizRelacao[i][j] === 1 && matrizRelacao[j][i] === 1 && i !== j) {
                return false;
            }
        }
    }
    return true;
}

fazerLeituraDeConjunto(conjuntoA, "A");
const relacao = fazerLeituraRelacao(); 
if(isRelacao(conjuntoA, relacao)){
    const isReflexiva = verificarReflexiva(conjuntoA, relacao);
    if(isReflexiva){
        console.log("reflexiva.");
    }else{
        console.log("não é reflexiva.");
    } 
    
    const isSimetrica = verificarSimetrica(conjuntoA, relacao);
    if(isSimetrica){
        console.log("simétrica.");
    }else{
        console.log(" não é simétrica.");
    }
    
    const isAntiSimetrica = verificarAntiSimetrica(conjuntoA, relacao);
    if(isAntiSimetrica){
        console.log("anti-simétrica.");
    }else{
        console.log("não é anti-simétrica.");
    }


}else{
    console.log("Não é uma relação de A em A.");
}

