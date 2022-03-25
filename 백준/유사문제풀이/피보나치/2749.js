//재귀로 구현할시 시간 복잡도는 O(2**n) 재귀로 풀면 시간 초가 이므로 반복문을 써서 해결
// 범위가 Num이 90까지여서  BigInt로 출력해야 해결할 수 있음 
const fs = '1000'
const input = +fs.toString()

let result = 0
let division = 1000000n
let times = (...matrices) =>
  matrices.reduce(
    ([ a,b,c], [d,e,f]) => [a*d + b*e, a*e + b*f, b*e + c*f]
  );

let power = (matrix, n) => {
  if (n === 1) return matrix;

  let halves = power(matrix, Math.floor(n / 2));

  return n % 2 === 0
         ? times(halves, halves)
         : times(halves, halves, matrix);
}

let fibonacci = (n) =>{
  n < 2
  ? result= n
  : result = power(new BigInt64Array([1n, 1n, 0n]) , n - 1)[0];
}

fibonacci(input)

let answer = result%division
console.log(answer.toString());