const fs = '10'
const input = fs.toString()

const answer = fibonacci(+input)

function fibonacci(arg){
  if(arg ==0){
    return 0 
  }
  if(arg <2){
    return 1
  }
  return  fibonacci(arg-1)+fibonacci(arg-2) 
}

console.log(answer);