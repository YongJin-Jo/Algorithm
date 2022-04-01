const fs ='10 20 30 40'
const input = fs.toString().trim().split(' ')
let AB = BigInt(input[0]+input[1])
let CD = BigInt(input[2]+input[3])
console.log((AB+CD).toString());
//let number =''
//let bulink =[]
//const result =[]
//input.map(item =>{
//
//  if(number.length !=0 && item ===' '){
//    result.push(number)
//    number=[]
//    return
//  }else if(item ===' '){return}
//  number +=item
//})
//result.push(number)
//
//let AB = BigInt(result[0]+result[1])
//let CD = BigInt(result[2]+result[3])
//console.log((AB+CD).toString());