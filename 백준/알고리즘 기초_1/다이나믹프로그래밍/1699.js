const fs ='13'
const N = +fs.toString().trim()
const dp =[0]

for(let i=1; i<=N; i++){
  dp[i] =i
  
}

for(let i=4; i<=N; i++){
  for(let j =2; j*j<=i; j++){
    dp[i] = Math.min(dp[i], dp[i-(j*j)]+1)
  }
}

console.log(dp[N]);