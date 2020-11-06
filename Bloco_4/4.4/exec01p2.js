function ehPalindromo(string) {
    let aoContrario ='';
    for(let index = string.length-1; index >= 0; index -= 1) {
        aoContrario = aoContrario + string[index];
    };

    if (aoContrario == string) {
        return true;
    } else {
        return false;
    };

};

console.log(ehPalindromo('arara'));