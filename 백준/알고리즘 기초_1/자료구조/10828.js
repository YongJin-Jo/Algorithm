const fs = '14\npush 1\npush 2\ntop\nsize\nempty\npop\npop\npop\nsize\nempty\npop\npush 3\nempty\ntop'
const input = fs.toString().split('\n')
const N = +input.shift()
let stack =[]
let result =[]

for(let i=0; i<N; i++){
  let len = stack.length
  switch(input[i]){
    case 'pop':
      result.push(stack.pop() || -1);
      break;      
    case'size':
      result.push(len)
      break;      
    case'empty':
      result.push(stack[0] ? 0 : 1);
      break;
    case'top':
      result.push(stack[stack.length - 1] || -1);
      break;
    default:
      stack.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(result.join('\n'));
