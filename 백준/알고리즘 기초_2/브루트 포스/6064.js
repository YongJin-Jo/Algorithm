const fs = '3\n10 12 3 9\n10 12 7 2\n13 11 5 6'
const [T,...arr] = fs.toString().trim().split('\n')
const DT = arr.map(item => item.split(' ').map(_ => +_))

for(let i=0; i<T; i++){
  console.log(calenderCounting(DT[i])); 
}

function calenderCounting(arr){
  let [M,N,x,y] = arr
  const MAXxy = M * N
  let index =0
  if(y === N) y=0
  let result=-1
  while(true){
    if((M * index + x) % N === y ){
      result = M * index + x  
      break
    }
    if(M * index + x > MAXxy ){
      break
    }
    index++
  }
  return result
}
