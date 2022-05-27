const fs ='3\n26 40 83\n49 60 57\n13 89 99'
const [N,...ary] = fs.toString().trim().split('\n')
const dt = ary.map(item => item.split(' ').map(_=> +_))
const dp = new Array(+N).fill().map(_=> new Array(3).fill(0))
for(let i=0; i<N;i++){
  dp[0][i] = dt[i][0]
}

for(let i=0; i<N; i++){
  for(let j=0; j<3;j++){
    dp[i][j] = Math.min(dp[i][j], dp[i])
  }
  
}

console.log(dp);