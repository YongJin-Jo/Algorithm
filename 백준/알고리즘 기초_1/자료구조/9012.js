const fs = '6\n(())())\n(((()())()\n(()())((()))\n((()()(()))(((())))()\n()()()()(()()())()\n(()((())()('
const input = fs.toString().split('\n')
const N = +input.shift()
const answer =[]
soultion(input)

function soultion(arg){
  for(let i=0; i<N; i++){
  
    const array = arg[i].split('')
    let result = stack(array)
    answer.push(result)
  }
  console.log(answer.join('\n'));
}

function stack(array){
  let stack = []

  for(key in array){
    if(array[key] === "("){
      stack.push(array[key])
    }else if(array[key] === ")"){
      if(stack.length===0){
        return "NO"
      }
      stack.pop()
    }
  }
  if(stack.length===0){
    return 'YES'
  }else{
    return 'NO'
  }
}
