const fs='3\n1 45000\n6 10\n13 17'
const [T,...input] = fs.toString().trim().split('\n')
const array =[]
for(let i =0; i<T; i++){
  const [A,B] = input[i].toString().split(' ')
  const gcbNumber = gcb(A,B)
  array.push((A*B)/gcbNumber)
}

console.log(array.join('\n'));

function gcb(A,B){
  const remainder = A%B
  if(remainder ===0) return B
  return gcb(B,remainder)
}