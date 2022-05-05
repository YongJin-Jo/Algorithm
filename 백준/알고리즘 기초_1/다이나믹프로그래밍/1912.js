const fs = '5\n-1 -2 -3 -4 -5'
const [N,input] = fs.toString().trim().split('\n')
const dt = input.toString().split(' ').map(item => +item)
const dp =[]
dp[0] = dt[0]

for(let i=1; i<N; i++){
  dp[i] = Math.max(dp[i-1]+dt[i],dt[i])
}

console.log(Math.max(...dp));