const fs ='22\nfront\nback\npop_front\npop_back\npush_front 1\nfront\npop_back\npush_back 2\nback\npop_front\npush_front 10\npush_front 333\nfront\nback\npop_back\npop_back\npush_back 20\npush_back 1234\nfront\nback\npop_back\npop_back'
const [N,...input] = fs.toString().split('\n')
let stack =[]
let result =[]
for(let i=0; i<(+N); i++){
  let [key,value] = input[i].split(' ')
  switch(key){
    case "push_front":
      stack.splice(0,0,+value)
      break
    case "push_back":
      stack.push(+value)
      break
    case "pop_front":
      result.push(stack.shift() || -1)
      break
    case "pop_back":
      result.push(stack.pop() || -1)
      break
    case "size":
      result.push(stack.length)
      break
    case "front":
      result.push(stack[0] || -1)
      break
    case "back":
      result.push(stack[stack.length-1] || -1)
      break
    default:
      result.push(stack.length !=0? 0:1)
      break   
  }

}
console.log(result.join('\n'));

//-1,-1,-1,-1,1,1,2,2,333,10,10,333,20,1234,1234,20
//-1,-1,-1,-1,1,1,2,2,333,10,10,333,20,1234,1234,20