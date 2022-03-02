const fs = '4'
const input = fs.toString().split('\n')

solution(input[0])

function solution(str){
  let N = +str
  let count =0

  while(true){
    if(N==0 || N<5 ){
      break
    }else{
      N = N-5 
      count++
    }
  }

  while(true){
    if(N %3 ==0){
      break
    }else{
      N += 5
      count--
    }
  }
  
  count += N/3
  if(+str < N){
    console.log(-1);
  }else{
    console.log(count);
  }
}

// 풀이 2 규칙을 통한 풀이
// 나머지에 따라 조건을 주어서 푸는 공식
solution2(input[0])

function solution2(str){
  let b5 = parseInt(str/5)
  let b3 = 0
  let r = parseInt(str%5)
  if(r ==0){
    console.log(b5);
  }else if(r == 1 && b5 >=1){
    console.log(b5-1+2);
  }else if(r == 2 && b5 >=2){
    console.log(b5-2+4);
  }else if(r == 3 ){
    console.log(b5+1);
  }else if(r == 4 && b5 >=1){
    console.log(b5-1+3);
  }else{
    console.log(-1);
  }

}