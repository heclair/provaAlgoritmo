  function separar(vetor, tipo) {
    let par = [];
    let impar = [];
  
    if (tipo === "par") {
      for ( i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
          par[i] = vetor[i]
        }
      }
      return par;
    }
  
    if (tipo === "ímpar") {
      for ( i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 !== 0) {
            impar[i] = vetor[i]
        }
      }
      return impar;
    }
  }
  
  const vetor = [12, 8, 4, 9, 3, 15, 11, 6, 0, 19];
  console.log("Pares:", separar(vetor, "par"));
  console.log("Ímpares:", separar(vetor, "ímpar"));