let custo = 11;
let valorVenda = 20;
let custoTotal = 0.2*custo;
let lucro = valorVenda - custoTotal;
let quantVenda = 1000;
if(custo < 0 || valorVenda < 0) {
    console.log('Valor informado inválido')
} else {
    console.log ('O lucro é ' + lucro*quantVenda)
}