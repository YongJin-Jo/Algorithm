const fs ='()(((()())(())()))(())' 
const input =fs.toString().split('')
const stack =[]
let answer = 0
for(let i=0; i<input.length;i++){
  if(input[i] === "("){
    stack.push(input[i])
  }else{
    if(input[i-1] ==="("){
      stack.pop()
      answer += stack.length
    }else{
      stack.pop()
      answer++
    }
  }
}
console.log(answer);
//let input  = new Map()
// fs.toString().split('').map((item,index)=> input.set(index,item))
// let stack =[]
// let count = 0
// for(let i=0; i<fs.length; i++){
//   if(input.get(i) ==="(" && input.get(i+1) ===")"){
//     count += stack.length
//     i++
//   }else if(input.get(i) === ")"){
//     stack.pop()
//     count++

//   }else{
//     const left = input.get(i)
//     stack.push(left)
//   }
// }
// console.log(count);