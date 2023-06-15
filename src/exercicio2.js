function area(x){
    lado1 = x;

    a1 = (((x**2)*Math.sqrt(3))/4);
    a1= a1*100;
    a1= (Math.round(a1))/100;

    return a1;
}

console.log("Área de um triângulo equilátero de lado 6:", area(6))
console.log("Área de um triângulo equilátero de lado 8:", area(8))