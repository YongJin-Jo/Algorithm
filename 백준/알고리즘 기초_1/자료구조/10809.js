const fs = 'baekjoon'
const input = fs.toString().split('')
const ASCII = 97
const array = Array(26).fill(-1)
for(let i=0; i<input.length; i++){
  const chr = input[i].charCodeAt()
  if(array[chr - ASCII] === -1) array[chr - ASCII] = i
  
}

console.log(array.join(' '));