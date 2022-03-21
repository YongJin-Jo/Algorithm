const fs = '5\n0 4\n1 2\n1 -1\n2 2\n3 3'
const [N,...input] = fs.toString().split('\n')

solution(input)

function solution(arg){
  const array =[]
  let str =''
  for(i=0; i < (+N) ; i++){
    array.push(arg[i].split(' ').map(item => +item))
  }
  array.sort((a,b)=>{
    if(a[1]!=b[1]){
      return a[1]-b[1]
    }
    return a[0]-b[0]
  })

  array.map(item => str += `${item[0]} ${item[1]}\n`)
  console.log(str.substring(0,str.length-1));
}