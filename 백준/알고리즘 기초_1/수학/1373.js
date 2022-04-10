const fs ='11001100'
const input = fs.toString().split('').reverse()
let number =0
let count =0
let arr =[]
for(let i=0; i<input.length; i++){
  if(i %3 ===0 ){ 
    count =0
    arr.push(number)
    number=0
  }
  number += Math.pow(2,count)
  count++
}
console.log(arr);