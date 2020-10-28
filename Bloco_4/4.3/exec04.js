let  n = 5;
let midlle = (n+1)/2;
let controlLeft = midlle;
let controlRight = midlle;
let symbol = '*';



for (let line = 0; line < midlle; line +=1) {
    let output = '';
    for(let col = 1; col <= n; col += 1) {
        if(col >= controlLeft && col <= controlRight){
            output += symbol;
        } else {
            output += ' ';
        }
    }
    controlLeft -= 1;
    controlRight += 1;
    console.log(output);
}