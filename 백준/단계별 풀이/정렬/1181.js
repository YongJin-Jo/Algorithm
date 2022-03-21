const fs = '13\nbut\ni\nwont\nhesitate\nno\nmore\nno\nmore\nit\ncannot\nwait\nim\nyours'
const [N,...input] = fs.toString().split('\n')

solution(input)

function solution(arg){
  let array = arg
  array.sort((a,b) => a.length - b.length || a.localeCompare(b))
  const uniqueValues = new Set(array);
  console.log(Array.from(uniqueValues).join('\n').trim());
}