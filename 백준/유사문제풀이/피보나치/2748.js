//재귀로 구현할시 시간 복잡도는 O(2**n) 재귀로 풀면 시간 초가 이므로 반복문을 써서 해결
// 범위가 Num이 90까지여서  BigInt로 출력해야 해결할 수 있음 

const fs = '90'
const input = +fs.toString()

console.log(fibonach(input));

function fibonach(num){
  let  n = 0,prevN = 1;

while(0 < num){
  const temp = BigInt(n) 
  n = BigInt(prevN) 
  prevN = temp + BigInt(prevN)
  num--
}
return n.toString()
}