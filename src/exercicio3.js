function classificar(vetor){

    for(var i=0; i<vetor.length; i++){

        vetor[i]=(vetor[i]%2==0)?'p':'i';

    }
    return vetor;
}

const vetor = [12, 8, 4, 9, 3, 15, 11, 6, 0, 19];

console.log("Par ou ímpar:", classificar(vetor));