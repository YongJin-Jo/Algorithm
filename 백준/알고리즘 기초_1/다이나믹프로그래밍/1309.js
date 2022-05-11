const fs ='4'
const N = +fs.toString().trim()
const arr = new Array(N+1).fill(Array(3).fill(0))
const dp = JSON.parse(JSON.stringify(arr))
const MOD = 9901
let r
dp[0][0] =1

for(let i=1; i<=N; i++){
  dp[i][0] = (dp[i-1][0] +dp[i-1][1]+dp[i-1][2]) %MOD
  dp[i][1] = (dp[i-1][0]+dp[i-1][2]) % MOD 
  dp[i][2] = (dp[i-1][0]+dp[i-1][1]) % MOD
}

r = (dp[N][0] +dp[N][1]+dp[N][2])%MOD

console.log(r);