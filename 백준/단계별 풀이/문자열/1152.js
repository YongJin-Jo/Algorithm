// 앞뒤에만 공백이 있을거라고 생각했다 하지만 split을 사용하면 해당 문자열에 대한 값을 기준으로 배여을 만들어서
// 문자 사이에 공백이 2개가 넘으면 배열에 ''값이 들어온다는 것이다. 이것이르로 인해 공백도 spit으로 배열값로 만든 것이다.

const fs = ' The  first character is a blank'
const input = fs.toString().trim().split('\n')

solution(input[0])

function solution(str){
  const arrstr = str.split(' ')
  let count = 0
  for( let i =0; i < arrstr.length; i++){
    if(arrstr[i].length !==0 ){
      count++
    }
  }
  console.log(count);
}

