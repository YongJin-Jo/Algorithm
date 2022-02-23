const fs = '1000'
let input = fs.toString().split('\n');

function f(num) {
  const strNum = String(num);
  if (strNum.length <= 2) {
      return true;
  }
  const diff = +strNum[1] - +strNum[0];
  let beforeNum = +strNum[1];
  for (let i = 2; i < strNum.length; ++i) {
      if (strNum[i] - beforeNum !== diff) {
          return false;
      }
  }
  return true;
}


function solution(N) {
  let cnt = 0;
  for (let i = 1; i <= N; ++i) {
      if (f(i)) {
          cnt++;
      }
  }
  console.log(cnt);
}


solution(+input[0]);