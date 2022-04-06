const fs ='8\n20\n42\n0'
const input = fs.toString().trim().split('\n')

for(let i=0; i<input.length-1; i++){
  const number = +input[i] 
  const sof = SOF(number)
  let j=0
  while(j<sof.length){
    const PrimeNumber1 = sof[j]
    const PrimeNumber2 = number- PrimeNumber1
    if(sof.includes(PrimeNumber2)){
      console.log(`${number} = ${PrimeNumber1} + ${PrimeNumber2}`);
      break;
    } 
    j++
  }
}


//SieveOfEratosthenes
function SOF(number){
  const isPrimeNumber = Array(number+1).fill(true)
  const PrimeNumber= [] 
  isPrimeNumber[0]= isPrimeNumber[1] = false

  for(let i=2; i<isPrimeNumber.length; i++){
    if(isPrimeNumber[i]){
      let m =2
      while(i*m <= number){
        isPrimeNumber[i*m] = false
        m++
      }
    }
  }

  for(let i=0; i<isPrimeNumber.length; i++){
    if(isPrimeNumber[i] && i%2 !=0 ){
      PrimeNumber.push(i)
    }
  }
  return PrimeNumber
}
