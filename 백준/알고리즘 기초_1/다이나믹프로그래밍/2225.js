const fs = '6 4'
const [N,K] = fs.toString().trim().split(' ').map(item => +item)
const MOD = 1000000000
const newArr = new Array(200+1).fill(Array(200+1).fill(0))
const dp = JSON.parse(JSON.stringify(newArr))
dp[0][0]  =1

for(let n=0; n<=N; n++){
  for(let k=1; k<=K; k++){
    for(let l=0; l<=n; l++){
      dp[n][k] += dp[n-l][k-1]
      dp[n][k] %= MOD 
    }
  }
}

console.log(dp[N][K]);