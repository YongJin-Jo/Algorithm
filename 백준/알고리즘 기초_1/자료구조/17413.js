const fs = '<problem>17413<is hardest>problem ever<end>'
const input = fs.toString(' ').split('')

var stack = [];
var queue = [];
var answer = '';
var isOpen = false;
var size = input.length + 1;
for (var i = 0; i < size; i++) {
    var ch = input[i];
    if (ch === '<') {
        isOpen = true;
        if (stack.length > 0) {
            answer += stack.reverse().join('');
            stack = [];
        }
    } else if (ch === '>') {
        isOpen = false;
        answer += queue.join('') + ch;
        queue = [];
        continue;
    } else if ((ch === ' ' && !isOpen) || ch === undefined) {
        answer += stack.reverse().join('').trim() + (ch === ' ' ? ch : '');
        stack = [];
        continue;
    }
    
    if (isOpen) {
        queue.push(ch);
    } else if (!isOpen) {
        stack.push(ch);
    }
}


console.log(answer);

// 정규식을 이용한 풀이
const re = /(<.+?>|\s)/g; 
const tmp = fs.toString().split(re);
let result = '';

tmp.map((x) =>{
  if(re.test(x)){
    result +=x
  }else{
    let array = x.split("").reverse().join('')
    result += array
  }
})
console.log(result);