//재귀로 구현할시 시간 복잡도는 O(2**n) 재귀로 풀면 시간 초가 이므로 반복문을 써서 해결
// 범위가 Num이 90까지여서  BigInt로 출력해야 해결할 수 있음 

let times = (...matrices) =>
  matrices.reduce(
    ([a,b,c], [d,e,f]) => [a*d + b*e, a*e + b*f, b*e + c*f]
  );

let power = (matrix, n) => {
  if (n === 1) return matrix;

  let halves = power(matrix, Math.floor(n / 2));

  return n % 2 === 0
         ? times(halves, halves)
         : times(halves, halves, matrix);
}

let fibonacci = (n) =>{
  let answer =0
  let division =1000000n
  n < 2
  ? answer = BigInt(n)
  : answer = BigInt(power([1, 1, 0], n - 1)[0])
  return (answer%division).toString()
}
console.log(fibonacci(1000))