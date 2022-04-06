// 에라토스테네스의 체

function SOF(arg){
  const [M,N] = arg
  const isPrimeNumber = Array(N+1).fill(true);
  isPrimeNumber[1] = false


  for(let i=2; i<=Math.ceil(Math.sqrt(N)); i++ ){
    if(isPrimeNumber[i]){
      let m =2
      while(i*m <= N){
        isPrimeNumber[i*m] = false
        m++
      }
    }
  }
  
  

  for(let i = M; i <=N; i++){
    if(isPrimeNumber[i]){
      console.log(i);
    }
  }
}
