const fs = '5'
let input = +fs.toString().trim();
let answer = ''
for(input; input >=1; input--){
  answer = (answer+input)+'\n'
}

console.log(answer);