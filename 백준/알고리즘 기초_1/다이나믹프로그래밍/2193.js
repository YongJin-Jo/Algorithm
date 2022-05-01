//1. 0으로 시작하지 않는다.
//2. 1이 두번 연속으로 나타나지 않는다.
const fs = '90'
const N = +fs.toString().trim()
const dp = [[0,0],[0,1],[1,0]]
let count =0

for(let i=3; i<=N; i++){
  dp[i] = [BigInt(dp[i-1][0])+BigInt(dp[i-1][1]),BigInt(dp[i-1][0])]
}

console.log(BigInt(dp[N][0]+dp[N][1]).toString());
