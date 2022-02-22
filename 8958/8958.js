// 문제를 봣을 때 처음에 spit을 통해 X를 기준으로 배열을 발들고 spit으로 나온 '' 배열은 fillter로 하면 해결 될줄 알앗지만 
// 생각보다 4차 배열까지 나와서 문제 푸는 방법을 바꿧따. 문자열을 배열로 접근 가능한 것을 생각을 못했었다. 다음에 문제 풀떄 생각하자

const fs ='5\nOOXXOXXOOO\nOOXXOOXXOO\nOXOXOXOXOXOXOX\nOOOOOOOOOO\nOOOOXOOOOXOOOOX'
const input = fs.toString().trim().split('\n')
const len = +input[0]

for(let i = 1; i <= len; i++){
  let count = 0;
  let sum = 0;
  for(let j =0; j < input[i].length; j++){
    console.log(input[i][j]);

    if(input[i][j]=== 'O'){
      count += 1;
    }else{
      count =0;
    }
    sum += count
  }
  console.log(sum);
}
