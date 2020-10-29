function maiorIndice(array) {
    let maiorValor = Number.NEGATIVE_INFINITY;
    for (let index = 0; index < array.length; index += 1) {
        if(array[index] > maiorValor) {
            maiorValor = index;
        };
    }
    return maiorValor;
}

console.log(maiorIndice([2, 3, 6, 7, 10, 1]));