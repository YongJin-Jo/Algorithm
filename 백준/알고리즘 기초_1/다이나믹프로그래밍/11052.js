const  fs = '4\n3 5 15 16'
const [T,input] = fs.toString().trim().split('\n')
const dp = input.toString().split(' ').map(item => +item)
dp.unshift(0)

for(let i=2; i<=T; i++){
  if(i <=2){
    dp[i] = Math.max(dp[i],dp[1]+dp[1])
  }else{
    let count = 1
    while (count<Math.ceil(i/2)) {
      let m = i-count
      dp[i] = Math.max(dp[i],dp[m]+dp[count])
      count++
    }
  }
}
console.log(dp[T]);
