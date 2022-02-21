const fs ='3\n10 20 30'
const input = fs.toString().trim().split('\n');
const len = +input[0]
const scoreArr = input[1].split(' ').map(item => +item)
const max = Math.max(...scoreArr)

let sum = 0
for( let i=0; i< scoreArr.length; i++){
  sum += scoreArr[i] / max * 100
}


console.log(sum/len);

