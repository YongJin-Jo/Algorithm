const fs ='10\n5\n2\n3\n1\n4\n2\n3\n5\n1\n7'
const [N,...input] = fs.toString().split('\n').map(item => +item)

soultion(input)

function soultion(array){
  let arr =[]
  const obj = countingSort(array)
  Object.keys(obj).sort((a,b)=> a-b)
  for(key in obj ){
    for(let i=0; i <= obj[key]; i++){
      arr.push(+key)
    }
  }
  console.log(arr);
}

function countingSort(array){
  const obj={}

  for(key of array){
    if(obj[key]){
      obj[key]++
    }else{
      obj[key] = 1
    }
  }
  return obj
}