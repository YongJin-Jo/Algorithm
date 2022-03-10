const fs = '6 8 10\n25 52 60\n5 12 13\n0 0 0'
const input = fs.toString().split('\n')

soultion(input)

function soultion(arg){
  for(let i=0; i<arg.length; i++){
    const [a,b,c] = arg[i].split(' ').map(item => +item).sort((a,b) => a-b)
    if(a ===0 && b ===0 && c ===0) return;
    if(a**2 + b**2 === c**2){
      console.log('right');
    }else{
      console.log('wrong');
    }
  }
}