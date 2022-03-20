const fs ='5\n3 4\n1 1\n1 -1\n2 2\n3 3'
const [N,...input] = fs.toString().split('\n')
soultion(input)
function soultion(arg){
  let str =''
  let coordsArr = arg.map(item => item.split(' ').map(item2 => +item2))
  coordsArr.sort((a,b) => {
    if(a[0] !== b[0]){
      return a[0] - b[0]
    }
    return a[1]-b[1]
  })

  coordsArr.map(item => str += `${item[0]} ${item[1]}\n`)
  console.log(str.substring(0,str.length-1));
}
