const fs ='15\npush 1\npush 2\nfront\nback\nsize\nempty\npop\npop\npop\nsize\nempty\npop\npush 3\nempty\nfront'
const input = fs.toString().split('\n')
const N = +input[0]
let queue = []
let result =[]
for(let i=1; i<=N; i++){
  const [text,value] = input[i].split(' ')
  let len = queue.length
  switch(text){
    case'pop':
      result.push(queue.shift() || -1)
      break;
    case'size':
      result.push(len)
      break;
    case'empty':
      result.push(len >0? 0:1)
      break;
    case'front':
      result.push(queue[0] || -1)
      break;  
    case'back':
      result.push(queue[len-1] || -1)
      break;
    default:
      queue.push(+value)
      break;
  }
  
}

console.log(result.join('\n'));