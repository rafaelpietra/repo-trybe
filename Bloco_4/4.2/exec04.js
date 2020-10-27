let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;

for(let i = 0; i < numbers.length; i += 1) {
    somaNumbers += numbers[i];
}
if (somaNumbers >20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor que 20");
}