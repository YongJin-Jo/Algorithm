const fs = '3'
const N = +fs.toString().trim()
let dp =new Array(N+1).fill().map(_ => Array(10).fill(0))
const mod =10007
dp[0][0]=1
for(let i=1; i<=N; i++){
  for(let j=0; j<10; j++){
    for(let k=0; k<=j; k++){
        dp[i][j] += dp[i-1][k]
    }
  }
}


console.log(dp[N].reduce((prev,next)=> prev += next,0));



