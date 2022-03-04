const fs = '4\n1 3 5 7'
const input = fs.toString().split('\n');
const N = Number(input.shift());

// 소수 판별 함수
function isPrime(n) {
  if(n === 1 )return;
  for(let i=2; i <n; i++){
    if(n%i ==0){
      return false
    }
  }
  return true
}

const numbers = input[0].split(' ').map(n => Number(n));

let count = 0;
for (let i = 0; i < N; i++) {
  
  if (isPrime(numbers[i])) {
    count += 1;
  }
}

console.log(count);