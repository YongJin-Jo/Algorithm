function d(n){
  const str = n.toString()
  let sum = 0
  for(let i=0; i< str.length; i++){
    sum += (+str[i])
  }
  return n+sum
}

function solution(){
  let arr = Array(10001).fill(0)
  for(let j = 1; j <10000; j++){
    const answer = d(j)
    if(answer < 10000){
      arr[answer]++ 
    }
  }
  for(let k =1; k < 10000; k++){
    if(arr[k] ===0){
      console.log(k);
    }
  }
}

solution()
