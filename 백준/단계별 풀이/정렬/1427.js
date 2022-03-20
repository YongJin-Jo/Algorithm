// 계수 정렬을 이용해 풀이
const fs = '61423'
const input = fs.toString().split('\n')

soultion(input[0])

function soultion(arg){
  
  console.log(countingSort(arg)); 
}

function countingSort(array){
  let map = new Map()
  let number = ''
  for(key of array){
    if(map.has(key)){
      let value = map.get(key)
      value++
      map.set(key,value)
    }else{
      map.set(key,1)
    }
  }
  let mapToTalbe =[...map]
  mapToTalbe.sort((a,b) => b[0]-a[0])
  
  for(let i =0; i<mapToTalbe.length; i++){
    for(let j =0; j< mapToTalbe[i][1]; j++){
      number += mapToTalbe[i][0]
    }
  }
  return number
}