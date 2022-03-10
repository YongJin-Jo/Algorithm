const fs = '42'
const input = fs.toString().split('\n')

soultion(input[0])

function soultion(arg){
  const R = +arg

  console.log(Euclid(R).toFixed(6));
  console.log(taxi(R).toFixed(6));


}

function Euclid(R){
  return Math.pow(R,2) * Math.PI
}

function taxi(R){
  return Math.pow(R,2) * 2
}
