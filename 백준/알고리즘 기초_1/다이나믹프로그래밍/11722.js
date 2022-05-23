const fs ='6\n10 30 10 20 20 10'
const [A,ary] = fs.toString().trim().split('\n')
const dt = ary.split(' ').map(_=> +_)
const dp = new Array(+A).fill(0)
dp[0] = 1
let r = dp[0]
for(let i=1; i<A; i++){
  for(let j=0; j<=i; j++){
    if(dt[j] > dt[i]){  
      dp[i] = Math.max(dp[i],dp[j])
    }
  }
  dp[i] +=1
  r = Math.max(r,dp[i])
}
console.log(r);