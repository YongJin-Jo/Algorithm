const fs ='5\n7\n3 8\n8 1 0\n2 7 4 4\n4 5 2 6 5'
const [n,...ary] = fs.toString().trim().split('\n')
let dt = ary.map(item => item.split(' ').map(_=> +_))
let dp =new Array(+n).fill().map(_ => Array(+n).fill(0))
dp[0][0] = dt[0][0]

for(let i=1; i<n; i++){
  for(let j=0; j<=i; j++){
    if(j>0){
      dp[i][j] = dp[i-1][j-1] +dt[i][j]
      dp[i][j] = Math.max(dp[i][j],dp[i-1][j] + dt[i][j])
    }

  }
}

console.log(Math.max(...dp[n-1]) );
