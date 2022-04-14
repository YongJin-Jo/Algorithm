const fs = '5\n6\n8\n10\n12\n100'
const [T,...input] = fs.toString().trim().split('\n')
const max = Math.max(...input)
const isPrimeNumber = SOF(max)
const answer = []

for(let i=0; i<T; i++){
  let target =  input[i]
  let count=0
  for(let i=2; i<=target/2; i++){
    if(isPrimeNumber[target-i] && isPrimeNumber[i]){
      count++
    }
  }
  answer.push(count)
}

console.log(answer.join('\n'));

function SOF(params) {
  const isPrimeNumber = Array(params+1).fill(true)
  isPrimeNumber[0] = isPrimeNumber[1] = false

  for(let i=2; i<isPrimeNumber.length; i++){
    if(isPrimeNumber[i]){
      let m=2
      while(m*i <=params){
        isPrimeNumber[m*i] = false
        m++
      }
    }
  }  

  return isPrimeNumber
}