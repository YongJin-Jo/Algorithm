const fs ='6\n6\n10\n13\n9\n8\n1'
const [n,...dt] = fs.toString().trim().split('\n').map(item => +item)
const dp=[0]
dp[1] = dt[0]
dp[2] = dp[1]+dt[1]

soultion(+n)


function soultion(n){
  if(n <= 2) return dp[n]
  for(let i=3; i<=n; i++){
    dp[i] = dp[i-3] +dt[i-1]+dt[i-2]
    dp[i] = Math.max(dp[i], dp[i-2]+dt[i-1])
    dp[i] = Math.max(dp[i],dp[i-1])
  }
}
console.log(dp[+n]);