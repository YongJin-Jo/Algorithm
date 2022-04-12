const fs = '5\n6\n8\n10\n12\n100'
const [T,...input] = fs.toString().trim().split('\n')
const max = Math.max(...input)
const promise = SOF(max)
const answer = []

for(let i=0; i<T; i++){
  let target = input[i]
  let count=0
  let result =0
  let duple =[]
  while(count<promise.length){
    let number1 = parseInt(target-promise[count])
    if(!duple.includes(number1) 
      && promise.includes(number1)){
      duple.push(number1)
      duple.push(promise[count])
      result++
    }
    count++
  }
  answer.push(result)
}

console.log(answer);

function SOF(params) {
  const isPrimeNumber = Array(params+1).fill(true)
  const PrimeNumber =[]
  isPrimeNumber[1] = false

  for(let i=2; i<isPrimeNumber.length; i++){
    if(isPrimeNumber[i]){
      let m=2
      while(m*i <=params){
        isPrimeNumber[m*i] = false
        m++
      }
    }
  }  

  for(let i=2; i<isPrimeNumber.length; i++){
    if(isPrimeNumber[i]) PrimeNumber.push(i)
  }

  return PrimeNumber
}