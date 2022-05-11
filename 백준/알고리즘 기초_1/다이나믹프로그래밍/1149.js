const fs = '8\n71 39 44\n32 83 55\n51 37 63\n89 29 100\n83 58 11\n65 13 15\n47 25 29\n60 66 19'
const [T,...N] = fs.toString().trim().split('\n')
const dt = N.map(item => item.split(' ').map(item => +item))
const [R,G,B] = dt[0]
const dp = [R,G,B]
for(let i=1; i<+T; i++ ){
  let [R,G,B] = dt[i]
  
  R += Math.min(dp[1],dp[2])
  G += Math.min(dp[0],dp[2])
  B += Math.min(dp[0],dp[1])

  dp[0] = R, dp[1] = G, dp[2] = B

}

console.log(Math.min(...dp));
