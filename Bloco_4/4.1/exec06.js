let pecaXadrez = "troll";
let pecaXadrezLower = pecaXadrez.toLowerCase()
    
switch(pecaXadrezLower) {
    case"rei":
    console.log('Move-se para todas as direções limitado a uma casa');
    break;

    case"rainha":
    console.log('Move-se para todas as direções e por quantas casas poder');
    break;

    case"bispo":
    console.log('Move-se apenas na diagonal, quantas casas poder e em sua respectiva cor');
    break;

    case"torre":
    console.log('Move-se na horizontal ou vertical e por quantas casas poder');
    break;

    case"cavalo":
    console.log('Move-se sempre formando um L. Duas casas na horizontal e uma vertical, ou duas na horizontal e uma na vertical');
    break;

    case"peao":
    console.log('Move-se apenas para frente. Na sua jogada inicial pode avançar duas casa. Captura o adversário uma casa na diagonal');
    break;


    default:
        console.log('Peça inválida');
}