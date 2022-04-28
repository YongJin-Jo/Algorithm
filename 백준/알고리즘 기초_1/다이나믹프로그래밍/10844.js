const fs ='3'
const input = +fs.toString().trim()
const arr = new Array(input+1).fill(Array(10).fill(0))
const dp = JSON.parse(JSON.stringify(arr))
let sum =0
dp[1][0]=0
for(let i=1; i<10; i++){
  dp[1][i] = 1
}

for(let i=2; i<=input; i++){
  dp[i][0]= (dp[i-1][0+1]) % 1000000000 

  dp[i][1] = dp[i-1][0] ===0? 1:dp[i-1][0]
  dp[i][1] += dp[i-1][2]
  dp[i][1] %= 1000000000

  for(let j=2; j<=8; j++){
    let data = dp[i-1][j-1] +dp[i-1][j+1]
    dp[i][j] = data % 1000000000
  }

  dp[i][9] = (dp[i-1][9-1])% 1000000000
}

for(let i=1; i<=9; i++){
  sum += dp[input][i]
  sum %= 1000000000
}
console.log(sum);