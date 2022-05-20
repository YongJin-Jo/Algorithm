const fs ='10\n1 100 2 50 60 3 5 6 7 8'
const [A,input] = fs.toString().trim().split('\n')
const dt = input.split(' ').map(_ => +_)
const dp =new Array(+A).fill(0)

dp[0] = dt[0]

for(let i=1; i<A; i++){
  for(let j=0; j<i; j++){
    if(dt[j] < dt[i]){
      dp[i] = Math.max(dp[i],dp[j])
    }
  }
  dp[i] += dt[i]
}
console.log(Math.max(...dp));
