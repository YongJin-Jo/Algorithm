const fs = '216'
const input = fs.toString().split('\n')

soultion(input[0])


function soultion(arg){
  const N = +arg
  let i =1
  let arr =[]
  let min
  while(i<1000000){
    let M = i
    let Marr = i.toString().split('').map(item =>+item)
    let sum = M
    for(let j=0; j<Marr.length; j++){
      sum += Marr[j]
    }
    if(sum === N){arr.push(M)}
    if(M >= N){ break}
    i++
  }
  min = Math.min(...arr)
  arr.length === 0? console.log(0): console.log(min);;
}