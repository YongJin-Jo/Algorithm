const fs = '1 1\n2 3\n3 4\n9 8\n5 2'
const input = fs.toString().trim().split('\n').map(item => item.split(' '));
let i =0;
let answer = ''
while(i < input.length ){
  target= input[i]
  answer = answer + ((+target[0])+(+target[1])+'\n')
  i++
}
console.log(answer);
