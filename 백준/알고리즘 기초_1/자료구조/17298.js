const fs ='4\n9 5 4 8'
const [N,...input] = fs.toString().split('\n')
const array = input[0].split(' ').map(item => +item)
let result = new Array(array.length).fill(-1);
let stack = [];
array.map((x, i) => {
  while (stack.length && array[stack[stack.length - 1]] < x) {
    result[stack.pop()] = x;
  }
  stack.push(i);
});

console.log(result.join(" "));