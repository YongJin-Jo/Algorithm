const fs = '9991'
const input = fs.toString().split('\n')

solution(input)

function solution(arg){
  let N = arg[0]
  let primes = []
  let i=2
  while(true){
    if(N%i ===0 ){
      N = N/i
      primes.push(i)
      i=1;
    }
    i++;
    if(i> N){
      break;
    }
  }
  console.log(primes.join('\n'));
}
