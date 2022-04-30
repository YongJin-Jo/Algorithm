//1. 0으로 시작하지 않는다.
//2. 1이 두번 연속으로 나타나지 않는다.

const fs = '0'
const N = +fs.toString().trim()
const array = Array(90+1).fill(0)
const dp = JSON.parse(JSON.stringify(array))
dp[1] = dp[2] = 1
dp[3] = 2 

for(let i=4; i<=N; i++){
  let count = bineryCheck(i) 
  dp[i] = dp[i-1] + count
}
console.log(dp[N]);

function bineryCheck(number){
  let binery = []  
  while (1 < number) {
    let M = parseInt(number%2) 
    number = parseInt(number/2) 
    binery.push(M)
    if(number <=1){binery.push(parseInt(number))}
  }

  binery.reverse()
  for(let i=0; i < binery.length; i++){
    if(binery[0] === 0) return 0
    if(binery[i] ===1 && binery[i+1] ===1  ) return 0
  }
  return 1
}