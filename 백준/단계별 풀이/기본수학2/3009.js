const fs = '30 20\n10 10\n10 20'
const input = fs.toString().split('\n')

let arrayX = [];
let arrayY = [];
let x;
let y;
for(let i = 0; i < 3; i++){
    arrayX.push(Number(input[i].split(" ")[0]));
    arrayY.push(Number(input[i].split(" ")[1]));
}
arrayX = arrayX.sort();
arrayY = arrayY.sort();

x = arrayX[1] === arrayX[0] ? arrayX[2] : arrayX[0];
y = arrayY[1] === arrayY[0] ? arrayY[2] : arrayY[0];

console.log(`${x} ${y}`);