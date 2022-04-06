const fs = 'baekjoon'
const S = fs.toString().trim().split('')
const len = S.length
const array =[]
for(let i=0; i<len; i++){
  if(i ===0){
    array.push(S.join(''))
  }else{
    S.shift()
    array.push(S.join(''))
  }
}

console.log(array.sort().join('\n'));
