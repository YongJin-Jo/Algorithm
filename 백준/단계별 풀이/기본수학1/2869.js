//n-(n-1)
const fs = '100 99 1000000000'
const input = fs.toString().split('\n')

solution(input[0])

function solution(str){
  const arr = str.split(' ').map(itme => +itme)
  const A = arr[0]
  const B = arr[1]
  const V = arr[2]
  let distance =0
  let count =0
  do{
    distance += A
    distance -= B
    count++
  }while( distance < V )
  console.log(distance);
}