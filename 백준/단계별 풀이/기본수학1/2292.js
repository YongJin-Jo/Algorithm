const fs = '13'
const input = fs.toString().split('\n')

solution(input[0])
//2~7 6
//8~19 12
//20~37 18
//38~61 24
function solution(str){
  const number = +str
  let count = 1
  let arithmeticSequence =6
  while(true){
    
    if(number <= arithmeticSequence){
      console.log(count);
      break;
    }

    arithmeticSequence = arithmeticSequence + (6*count)
    count++
  }
}