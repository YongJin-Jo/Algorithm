const fs ='baekjoon'
const input = fs.toString().split('')
const ASCII =97
const array = Array(26).fill(0)
for(let i =0; i< input.length; i++){
  const chr = input[i].charCodeAt()
  array[chr-97]++
}
console.log(array.join(' '));
