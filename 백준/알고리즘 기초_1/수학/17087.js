const fs = '3 81\n33 105 57'
const [[S,N],input] = fs.toString().split('\n').map(item => item.split(' ').map(item => +item))
const Distence =new Set(input.map(x => Math.abs(x-N)))   
const gcbD = [...Distence]
let temp = GCD(gcbD[0],gcbD[1])

if(input.length ===1) console.log(gcbD[0]);
else if(input.length ===2 ) console.log(temp);
else {
  for(let i=0; i<S; i++){
    temp = GCD(temp,gcbD[i])
  }
  console.log(temp);
}


function GCD(a,b){
  let reminder 
  while (b) {
    reminder = a%b
    a = b;
    b = reminder
  }
  return a
}
