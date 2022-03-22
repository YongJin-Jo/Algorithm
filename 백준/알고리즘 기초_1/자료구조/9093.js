const fs = '2\nI am happy today\nWe want to win the first prize'
const input = fs.toString().split('\n')
const N = input.shift()
let answer =[]
for(let i=0; i<N; i++){
  const array = input[i].split(' ').map(item => item.split('').reverse().join(''))
  answer.push(array.join(' ')) 
}
console.log(answer.join('\n'));