function menorValor(array) {
    let valorMenor = Number.POSITIVE_INFINITY;
    for(let index = 0; index < array.length; index += 1) {
        if(array[index] < valorMenor) {
            valorMenor = index;
        };
    }
    return valorMenor;
};

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));