const fs = '3\n29\n38\n12\n57\n74\n40\n85\n61'
const input = fs.toString().trim().split('\n').map(item =>+item)
const max = Math.max.apply(null,input)
const index = input.findIndex(item => item == max)
console.log(max+"\n"+(index+1));
