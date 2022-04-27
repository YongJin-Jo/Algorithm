const fs ='3\n4\n7\n10'
const [T,...input] = fs.toString().trim().split('\n').map(item => +item)
const max = Math.max(...input)
const array = new Array(max+1).fill(Array(4).fill(0))
const dp = JSON.parse(JSON.stringify(array))
dp[1][1] = dp[2][2] = dp[3][3] =1

for(let i=2; i<=max; i++){
  if(i-1>0){
    dp[i][1] = dp[i-1][2] +dp[i-1][3]
  }

  if(i-2>0){
    dp[i][2] = dp[i-2][1] +dp[i-2][3]
  }
  if(i-3>0){
    dp[i][3] = dp[i-3][1] +dp[i-3][2]
  }
  dp[i][1] %= 1000000009
  dp[i][2] %= 1000000009
  dp[i][3] %= 1000000009
}

for(let i=0; i< T; i++){
  let num = input[i]
  let l  =dp[num][1] +dp[num][2]+dp[num][3]
  console.log(l%1000000009);
}
