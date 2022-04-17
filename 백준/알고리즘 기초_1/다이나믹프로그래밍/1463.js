const fs = '10'
let n = +fs.toString().trim()
let Num =[]
Num[0] = makeNumber(n%2 >0? false:n/2)
Num[1] = makeNumber(n%3 > 0? false:n/3)
Num[2] = makeNumber(n-1 > 1? n-1:false)

let filterNum = Num.filter(item => item != -1)

console.log(Math.min(...filterNum));

function makeNumber(n){
  if(!n) return -1

  let count =1
  while (n >1) {
    if(n %3 ===0){
      n = n/3
      count++
    }else if(n % 2 ===0){
      n = n/2
      count++
    }else {
      n -=1
      count++
    }
  }
  return count
}

