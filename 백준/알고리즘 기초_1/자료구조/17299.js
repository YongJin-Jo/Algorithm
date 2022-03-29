const fs = '7\n1 1 2 3 4 2 1'
const [N,...input] = fs.toString().split('\n')
const array= input[0].split(' ').map(item => +item)
const count = new Map()
const result = Array(array.length).fill(-1)
const stack=[]

for(key of array){
  if(count.has(key)){
    let value = count.get(key)
    value++
    count.set(key,value)
  }else{
    count.set(key,1)
  }
}

array.map((x,i)=>{
  while (stack.length && count.get(array[stack[stack.length - 1]]) < count.get(x)) {
    result[stack.pop()] = x;
  }
  stack.push(i);
})

console.log(result.join(' '));