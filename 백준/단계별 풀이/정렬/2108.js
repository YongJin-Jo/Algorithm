const fs = '3\n0\n0\n-1'
const [N,...input] = fs.toString().split('\n').map(item => +item)
soultion(input)

function soultion(array){
  let sortedArr = array.map(item => +item).sort((a,b) =>a-b )
  let len = sortedArr.length
  let sum = sortedArr.reduce((previousValue, currentValue) => previousValue + currentValue,0)
  let average = Math.round(sum/N)
  let middleValue = sortedArr[Math.floor(len/2)]
  let mode = MaxFreconey(array)
  let range = sortedArr[len-1]-sortedArr[0]
  console.log(`${average}\n${middleValue}\n${mode}\n${range}`);
}

function MaxFreconey(array){
  obj = {}
  for(key of array){
      if(obj[key]){
        obj[key]++
      }else{
        obj[key] = 1
      }
  }
  const valueObj = Object.values(obj)
  const keyObj = Object.keys(obj)
  const max = Math.max(...valueObj)
  let mode =[]
  for(key of keyObj){
    if(obj[key] === max){
      mode.push(+key)
    }
  }

  if(mode.length > 1){
    mode.sort((a,b) => a-b)
    return mode[1]
  }else{
    return mode[0]
  }
}
