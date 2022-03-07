const fs = '3\n8\n10\n16'
const input = fs.toString().split('\n').map(item => +item)

solution(input)

function solution(arg){
  for(let i =0; i< arg; i++){
    const N = arg[i]
    const isPrime = Array(N+1).fill(true)
    let primeArr =[]
    isPrime[0] = isPrime[1] = false

    for(let i =2; i<= Math.ceil(Math.sqrt(N)); i++ ){
      if(isPrime[i]){
        let m = 2
        while(i*m <N){
          isPrime[i*m] = false
          m++
        }
      }
    }

    for(let i=2; i<=N; i++){
      if(isPrime[i]){
        primeArr.push(i)
      }
    }
    
    console.log();
  }
}

