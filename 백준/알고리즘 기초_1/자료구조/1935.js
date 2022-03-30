const fs ='5\nABC*+DE/-\n1\n2\n3\n4\n5' //A*B+C-D/E
const [N,SIC,...input] = fs.toString().split('\n')
const array = input.map(item => +item)

const formulaArr = SIC.split('');
const numberObj = [];
let startCode = 65;
const stack = [];

for (let i = 0; i < N; i++) {
  numberObj[String.fromCharCode(startCode)] = array[i]
  startCode++;
}

const command = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

formulaArr.forEach(v => {
  if ('A' <= v && v <= 'Z') stack.push(numberObj[v]);
  else {
    const b = stack.pop();
    const a = stack.pop();
    stack.push(command[v](a, b));
  }
});

console.log(stack[0].toFixed(2));