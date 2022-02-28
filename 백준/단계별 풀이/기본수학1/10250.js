const fs = '2\n6 12 10\n30 50 72'
const input = fs.toString().split('\n')


solution(input)

function solution(str){
   const T  = +str.shift()
  for(let i=0; i < T; i++){
    const Tcase = str[i].split(' ').map(itme => +itme)
    const H = Tcase[0] 
    const N = Tcase[2]
    const flor = N%H
    const Ho = ((N-1)/H)+1 
    if(flor === 0){flor = H}
    console.log(`${flor}${Math.floor(Ho/10)}${Math.floor(Ho%10)}`);
  }
}