const fs ='8\n20\n42\n0'
const input = fs.toString().trim().split('\n').map(item => +item)
let result=''
let max = Math.max(...input)
let sof = SOF(max)

input.map(item =>{
  let number = +item
  let i=3
  while(i<sof.length){
    if (sof[i] && sof[number - i]) {
      result += `${number} = ${i} + ${number - i}\n`;
      break;
    }
    i+=2
  }
})

console.log(result.trim());

//SieveOfEratosthenes
function SOF(number){
  const isPrimeNumber = Array(number+1).fill(true)
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

  return isPrimeNumber
}
