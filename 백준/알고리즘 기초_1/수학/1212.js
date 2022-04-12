const fs ='314'
const input = fs.toString().trim().split('')
let binaryNumberStr = '' 
for(let i=0; i<input.length; i++){
  let number = +input[i]
	let changeTwo = number.toString(2);
  if(i !==0){
    if(changeTwo.length <3){
      changeTwo = "0".repeat(3-changeTwo.length)+changeTwo
      binaryNumberStr += changeTwo
    }else{
      binaryNumberStr += changeTwo
    }
  }else{  
    binaryNumberStr += changeTwo
  } 

}
console.log(binaryNumberStr);