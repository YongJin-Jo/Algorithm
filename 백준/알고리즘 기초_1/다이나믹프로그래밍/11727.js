const fs ='8'
const count = +fs.toString().trim()
const dp =[]
dp[0] = 1;
dp[1] = 1;
for (let i = 2; i <= count; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]*2)%10007;
}



console.log(dp);