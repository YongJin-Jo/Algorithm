const fs = '1\n10\n13\n100\n1000\n10000\n100000\n0'
const input = fs.toString().split('\n').map(item => +item)

solution(input)

function solution(arg){
  for(let i = 0; i< arg.length; i++){
    const M = arg[i]
    const N = 2*arg[i]

    const isPrimeNumber = Array(N+1).fill(true)

    const result = []

    isPrimeNumber[0] = isPrimeNumber[1] = false;

    for(let j =2; j<=Math.ceil(Math.sqrt(N)); j++){
      if(isPrimeNumber[j]){
        let m =2
        while( j*m <=N){
          isPrimeNumber[j*m] = false
          m++
        }
      }
    }

    for(let k =M+1; k <= N; k++){
      if(isPrimeNumber[k]){
        result.push(k)
      }
    }

    if(result.length != 0){
      console.log(result.length.toString());
    }
  }
}