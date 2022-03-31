const fs = 'This is String\nSPACE    1    SPACE\n S a M p L e I n P u T     \n0L1A2S3T4L5I6N7E8'
const input = fs.toString().split('\n')
let i =0
while(i<input.length){
  const array = input[i].split()
  let check = Array(4).fill(0)
  array.map(item => item.split('').map(item =>{
    
    if(item >='A' || item <='Z') check[1]++
    else if(item >='a' || item <='z') check[0]++
    else if(itme ===' ') check[4]++
    else check[3]++
  }))
  console.log(check.join(' '));
  i++
}