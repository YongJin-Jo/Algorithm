const fs = '5\n1\n2\n5\n3\n4'
const input = fs.toString().split('\n').map(item => +item)
const N = input.shift()

let answer = soultion(input)
console.log(answer);

function soultion(arg){
  let stack =[]
  let count =0
  let answer = []

for(let i =0; i<N; i++){
  const number = arg[i]
  while(count< number){
    stack.push(count++)
    answer.push('+') 
  }
  const popedItem = stack.pop()
  if(popedItem === number){
    return "NO"
  }
  answer.push("-") 
}
  return answer.join("\n")
}
