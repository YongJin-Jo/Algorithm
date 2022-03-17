const fs ='5\n5\n4\n3\n4\n1'
const input = fs.toString().split('\n').map(item => +item)
const N = input.shift()

soultion(input)



soultion(input)
function soultion(arg){
  let arr = []

  for(let i=0; i< N; i++){
    const find = arr.find(item => item === arg[i])
    if(find === undefined){arr.push(arg[i])}
  }
  arr.sort((a,b) => a-b)
  console.log(arr.join('\n'));
}