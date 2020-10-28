let nAsterisco = 5;
let space =" ";
let symbol = "*";

for (let line = 1; line <= nAsterisco; line += 1) {
    let output = "";
    for (let col = 1; col <= nAsterisco ; col += 1) {
        if (col <= nAsterisco -line) {
            output += space
        } else {
            output += symbol;
        }
    }
    console.log(output);
}




