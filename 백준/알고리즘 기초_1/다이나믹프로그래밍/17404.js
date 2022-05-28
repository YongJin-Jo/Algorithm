const fs ='3\n26 40 83\n49 60 57\n13 89 99'
const [N,...ary] = fs.toString().trim().split('\n')
const dt = ary.map(item => item.split(' ').map(_=> +_))
const dp = new Array(+N).fill().map(_=> new Array(3).fill(0))
let ans = 1000*1000+1
dp[0] = dt[0]

for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 3; k++) {
    if (i == k) dp[1][k] = dt[1][k];
    else dp[1][k] = ans;
  }
  console.log('1st',dp);
  for (let k = 2; k < N; k++) {
    dp[k][0] = dt[k][0] + Math.min(dp[k - 1][1], dp[k - 1][2]);
    dp[k][1] = dt[k][1] + Math.min(dp[k - 1][0], dp[k - 1][2]);
    dp[k][2] = dt[k][2] + Math.min(dp[k - 1][1], dp[k - 1][0]);
  }
  console.log('2st',dp);

  for (let k = 0; k < 3; k++) {
    if (i != k) {
    ans = Math.min(ans, dp[N-1][k]);			
    }
  }
}

console.log(ans);