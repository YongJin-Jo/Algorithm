const fs ='9'
const dp =[]
let mod 
dp[0]=dp[1]= 1
for(let i=2; i<=+fs; i++){
  
  let n = 1
  let count = 0
  let duple = []
  while (n <i) {
    let a = i-n
    if( !duple.includes(a) && !duple.includes(n) ){
      let num1 = dp[a]
      let num2 = dp[n]
      let sum =num1+num2
      console.log(sum);
      count += sum
    }
    duple.push(n)
    n++
  }
  dp[i] = count
}

mod = 10007%dp[dp.length-1]
console.log(mod);