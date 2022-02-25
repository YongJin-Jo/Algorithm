const fs ='839 237'
const input = fs.toString().split('\n')

solution(input[0])

function solution(str){
  const strArr = str.split(' ')
  let max
  let reverseArr = []
  for(let i =0; i < strArr.length; i++){
    let reverseStr = strArr[i].split('').reverse().join('')
    reverseArr.push(reverseStr)
  }
  reverseArr.map(item => +item)
  max = Math.max(...reverseArr)
  console.log(max);
}