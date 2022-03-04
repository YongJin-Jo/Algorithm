const fs = '60\n100'
const input = fs.toString().split('\n').map(item => +item)

solution(input)

function solution(arg){
  const num1 = arg[0]
  const num2 = arg[1]
  const primeArr = []
  let min =0
  let sum = 0
  for( let i = num1; i <=num2; i++){
    
    if(isPrime(i)){
      primeArr.push(i)
    }
  }
  min = Math.min(...primeArr) 
  sum = primeArr.reduce((accumulator,item) => accumulator+item,0)
  if(primeArr.length <=0){
    console.log(-1);
  }else{
    console.log(`${sum}\n${min}`);
  }
}

function isPrime(n) {
  if(n === 1 )return false;
  for(let i=2; i <n; i++){
    if(n%i ==0){
      return false
    }
  }
  return true
}