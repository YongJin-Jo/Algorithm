const fs = '5\n20 10 35 30 7'
const input = fs.toString().trim().split('\n')
const lenght = +input[0]
let sortTarget = input[1].split(' ').map(itme => +itme)
let min= 0
let max = 0
for(let i =0; i<lenght; i++){
  if(i === 0){
    min = sortTarget[i]
    max = sortTarget[i]
  }
  sortTarget[i] < min? min =sortTarget[i]:null
  sortTarget[i] > max? max = sortTarget[i]:null

}

console.log(min, max);

// sort 를 이용한 풀이

const useSortFunc = input[1].split(' ').map(item =>+item).sort((a,b) => a-b)
console.log(useSortFunc[0],useSortFunc[lenght-1]);

// Math max min을 이용한 풀이
const min1 = Math.min.apply(null, sortTarget);
const max1 = Math.max.apply(null, sortTarget);

console.log(min1, max1);