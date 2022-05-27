const fs ='12'
const N = +fs.toString().trim()
const dp =[0,0,3,0,]
dp[4] = dp[2]*3+2
for(let i=5; i<=N; i++){
  if(i % 2 !=0) {
    dp[i]=0
  }else{
    dp[i] = dp[i-2]*3
    for(let j=i-4; j>=2; j--){
    dp[i] += dp[j]*2 
    }
    dp[i]+=2
  }
  
}

console.log(dp[N]); 