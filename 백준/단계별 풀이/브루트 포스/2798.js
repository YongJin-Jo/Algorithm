const fs = '5 21\n5 6 7 8 9'
const input = fs.toString().split('\n')
const firstLine = input[0].split(' ').map(item => +item)
const N = firstLine.shift()
const M = firstLine.shift()

solution(input[1])

function solution(arg){
  const number = arg.split(' ').map(item => +item)
  const arr= []
  let max 
  for(let i=0; i< N-2; i++){
    for(let j=i+1; j<N-1; j++){

      for(let k =j+1; k<N; k++){
        const sum = number[i]+number[j]+number[k]
        if( sum <= M){
          arr.push(sum)
        }
      }
    }
  }
  max = Math.max(...arr)
  console.log(max);
}
