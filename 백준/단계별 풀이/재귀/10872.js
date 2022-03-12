const fs ='10'
const input = fs.toString()


const answer = factorial(+input)

console.log(answer); 


function factorial(arg){
  if(arg <=1){
    return 1
  }
  return arg *factorial(arg-1)
}


