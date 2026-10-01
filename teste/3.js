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
