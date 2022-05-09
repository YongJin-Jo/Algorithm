const fs ='3\n5\n7\n10'
const [T,...input] = fs.toString().trim().split('\n')
let dp =[0,1,2,4]

for(let i=0; i<T; i++){
  console.log(soultion(+input[i])); 
}

function soultion(target){
  if(target === 1 || target === 2 || target === 3){
    return dp[target]
  }
  for(let i=4; i<=target; i++){
    dp[i] = dp[i-1]+dp[i-2]+dp[i-3]
  }
  return dp[target]
}