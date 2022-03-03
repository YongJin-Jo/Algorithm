const fs = '9223372036854775807 9223372036854775808'
const input = fs.toString().split(' ')


solution(input)

function solution(str){
  let num1 = str[0].split('').map(itme => +itme)
  let len1 = num1.length
  let num2 = str[1].split('').map(itme => +itme)
  let len2 = num2.length
  let max = len1 >= len2? len1:len2
  let sumArr = []
  while(len1<max){
    num1.unshift(0)
  }
  while(len2 < max){
    num2.unshift(0)
  }
  let sumCount = 0

  for(let i=max-1; i >=0; i--){

    let sum = num1[i]+num2[i]
    sum += sumCount
    sumCount=0
    if(sum >=10){
      sumCount = parseInt(sum/10)
      sum = parseInt(sum%10)
      sumArr.push(sum.toString())
    }else{
      sumArr.push(sum.toString())
    }
  }
  if(sumCount !==0){
    sumArr.push(sumCount.toString())
  }
  console.log(sumArr.reverse().join(''));
}

// 문제 풀이
input = fs.toString().trim().split(" ").map(BigInt); 
const first = input[0]; const second = input[1]; 
const answer = (first + second).toString() 
console.log(answer);
