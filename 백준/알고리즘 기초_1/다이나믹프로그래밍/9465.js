const fs ='2\n1\n50\n30\n7\n10 30 10 50 100 20 40\n20 40 30 50 60 20 80'
const [T,...inputs] = fs.toString().trim().split('\n')
for(let num=0; num<T; num++){
    const count = Number(inputs[3*num]);
    const up = inputs[3*num+1].split(' ').map(v=>Number(v));
    const down = inputs[3*num+2].split(' ').map(v=>Number(v));
    let dp = [[0, up[0], down[0]]];
    for(var i=1; i<count; i++){
        dp[i] = [
            Math.max(...dp[i-1]),
            Math.max(dp[i-1][0], dp[i-1][2]) + up[i],
            Math.max(dp[i-1][0], dp[i-1][1]) + down[i]
                ];
    }
    console.log(dp);
    console.log(Math.max(...dp[count-1]));
}