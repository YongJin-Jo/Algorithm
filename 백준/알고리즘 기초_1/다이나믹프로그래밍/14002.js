const fs ='6\n10 20 10 30 20 50'
const [N,input] = fs.toString().trim().split('\n')
const sequence = input.toString().split(' ').map(item => +item)
const dp = new Array(N).fill(0);
let arr = []
for(let i=0; i<N; i++){
    let max = 0;
    let maxIndex = -1
    for(let j=0; j<i; j++){
        if(sequence[i] > sequence[j] && dp[j] > max){
            max = dp[j];
            maxIndex = j
        }
    }
    dp[i] = max + 1;
    arr[i] = maxIndex !== -1 ? arr[maxIndex].concat(sequence[i]) : [sequence[i]];
}
const maxLen = Math.max(...dp)
console.log(`${maxLen}\n${arr[dp.indexOf(maxLen)].join(' ')}`);
