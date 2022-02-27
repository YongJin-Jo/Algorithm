const fs = '14'
const input = fs.toString().split('\n')

solution(input[0])

function solution(str){
  let X = +str
  let index = 0
  let sum = 0
  while(true){
    index++
    sum = index*(index+1)/2
    if(X <= sum){break}
  }
  // n(n-1)/2 1~(n-1) 까지 개수
  // 열의 위치
  let num = X -(index-1)*index/2
  console.log(sum, num)

  if(index % 2 == 0){
    console.log(`${num}/${index-num+1}`);
  }else{
    console.log(`${index-num+1}/${num}`)
  }




}