const fs ='150\n266\n427'
const input = fs.toString().trim().split('\n').map(item => +item)
const multiplication = input[0] * input[1] * input[2]
const mulArr = multiplication.toString().split('').sort((a,b)=>a-b).map(itme => +itme)
const numRecord = [0,0,0,0,0,0,0,0,0,0]

for(let i =0; i <mulArr.length; i++){
  numRecord[mulArr[i]]++
}
console.log(numRecord.join('\n'));