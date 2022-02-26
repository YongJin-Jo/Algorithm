// 문제 유형 반복문

const fs ='5\n1 1\n12 34\n5 500\n40 60\n1000 1000'
const input = fs.toString().split('\n')
console.log(input);
const len = +input[0];

let answer = ''
for(let i=1; i<=len; i++){
  let j = 0
  const arr = input[i].split(' ')
  answer = answer +((+arr[j]) + (+arr[j+1])+'\n') 
}
  console.log(answer);