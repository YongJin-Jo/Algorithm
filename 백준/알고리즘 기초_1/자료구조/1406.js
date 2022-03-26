// 시간 초가 
//const [E,M,...input] = fs.toString().split('\n')
//let array = E.split('')
//let couser = array.length
//for(let i=0; i<+(M); i++){
//
//  switch(input[i]){
//    case 'L':
//      if(couser >0 ){
//        couser -= 1
//      }
//      break
//    case 'D':
//      if(couser < array.length){
//        couser += 1
//      }
//      break;
//
//    case 'B':
//      if(couser !==0){
//        couser--
//        array.splice(couser,1)
//      }
//      break;
//
//    default:
//      const [P,$] = input[i].split(' ')
//      array.splice(couser,0,$)
//      couser++
//      break;
//  }
//}
//
//console.log(array.join(''));

// 스택을 이용한 방법
const fs ='abc\n9\nL\nL\nL\nL\nL\nP x\nL\nB\nP y' //yxabc
const input = fs.toString().split('\n')
let lStack = input[0].split("");
let rStack = [];
let len = parseInt(input[1]);

for (let i = 2; i < 2 + len; i++) {
  let [cmd, value] = input[i].split(" ");
  if (cmd === "L" && lStack.length) rStack.push(lStack.pop());
  else if (cmd === "D" && rStack.length) lStack.push(rStack.pop());
  else if (cmd === "B") lStack.pop();
  else if (cmd === "P") lStack.push(value);
}

let answer = lStack.join("");
answer += rStack.reverse().join("");
console.log(answer);
