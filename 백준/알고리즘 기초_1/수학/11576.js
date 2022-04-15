const fs ='17 8\n2\n2 16'
const input = fs.toString().trim().split('\n')
const [A,B] = input[0].split(' ')
const m = input[1]
const NNumber = input[2].split(' ').reverse()
let DEC =0
let answer =[]
for(let i=0; i<m; i++){
  DEC += NNumber[i] *(A**i)
}

if(DEC ===0){
  console.log(0);
}else{
  while(DEC>0){
    answer.unshift(DEC%B)
    DEC =  Math.floor(DEC/B)
  }
  console.log(answer.join(' '));
} 