const fs = '6\n1000 999 1000 999 1000 999'
const [N,...input] = fs.toString().split('\n')

solution(input)

function solution(arg){
  let str = []
  const array =  arg[0].split(' ').map(item => +item)
  const sort = arg[0].split(' ').map(item => +item).sort((a,b) => a-b)
  let len = sort.length

  let set = new Set(Array.from(sort))
  const map = new Map()
  const setArray = Array.from(set)
  setArray.forEach((item,index) => {
    map.set(item,index)
  });
  for(let i=0; i<len; i++){
    const num = array[i]
    if(map.has(num)){
      str.push(map.get(num))
    }    
  }  

  console.log(str.join(' '));
}