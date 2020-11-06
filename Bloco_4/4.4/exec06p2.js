function somaIndices(num1) {
    let soma = 0 ;
    for(let index = 1; index <= num1; index += 1) {
        soma += index;
    }
    return soma;
}

console.log(somaIndices(6));