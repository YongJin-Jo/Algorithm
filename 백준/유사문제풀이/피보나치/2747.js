//재귀로 구현할시 시간 복잡도는 O(2**n) 재귀로 풀면 시간 초가 이므로 반복문을 써서 해결

const fs = '17'
const input = +fs.toString()
console.log(fibonach(input));

function fibonach(num){
let a=0
let b =1
while(0 < num){
  let c = a
  a = b
  b = c+b
  num -= 1
}
return a
}