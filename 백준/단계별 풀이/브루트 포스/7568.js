const fs = '5\n55 185\n58 183\n88 186\n60 175\n46 155'
const input = fs.toString().split('\n')
const N = +input.shift()

soultion(input)

function soultion(arg){
  let arr =[]
  for(let i=0; i<N; i++){
    let count =1
    for(let j=0; j<N; j++){
      const [x,y] = arg[i].split(' ').map(item => +item)
      const [p,q] = arg[j].split(' ').map(item => +item)
      if(x < p && y < q){
        count++
      }
    }
    arr.push(count)
  }
  console.log(arr.join(' '));
}
