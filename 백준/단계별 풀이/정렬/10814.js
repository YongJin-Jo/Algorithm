const fs = '3\n21 Junkyu\n21 Dohyun\n20 Sunyoung'
const [N,...input] = fs.toString().split('\n')

solution(input)

function solution(arg){
  arg.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);
  console.log(arg.join('\n').trim());
}