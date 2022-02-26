const fs ='25\n7000000000000000000000000'
const input = fs.toString().split('\n')
 
function solution(num){
  const len = +num.shift()
  const arr = num[0].split('').map(itme => +itme)
  let sum = 0
  for(let i=0; i< len; i++){
    sum += arr[i]
  }
  console.log(sum);
}

solution(input)