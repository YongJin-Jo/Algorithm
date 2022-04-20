const fs ='2\n3 4\n1 3 3 2 2 1 4 1 0 6 4 7\n4 4\n1 3 1 5 2 2 4 1 5 0 2 3 0 6 1 2'
const input = fs.toString().trim().split('\n')
const T = input.shift()
let obj ={}
for(let i=0; i<T; i++){
  let [n,m] =input.shift().split(' ').map(item => +item)
  let l = input.shift().split(' ').map(item => +item)
  let array = []
  for(let i=0; i<n; i++){
    const b = []
    for(let j=0; j<m; j++){
      b.push(l.shift())
    }
    array.push(b)
  }
  obj[i]=array
}
console.log(obj);