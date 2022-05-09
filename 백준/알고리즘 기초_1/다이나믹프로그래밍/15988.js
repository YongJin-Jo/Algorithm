const fs ='3\n4\n7\n10'
const [T,...input] = fs.toString().trim().split('\n').map(item => +item)
const max = Math.max(...input)
const mod = 1000000009
const dp = [0,1,2,4]
const answer = []
for(let i=0; i<T;i++){
  answer.push(soultion(input[i]));
}

function soultion(number){
  if(number ===1 || number ===2 || number ===3){
    return dp[number]
  }

  for(let i=4; i<=max; i++){
    dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
    dp[i] %= mod 
  }

  return dp[number]
}

console.log(answer.join('\n'));