const fs = '2 15\n2\n3'
const input = fs.toString().trim().split('\n') 
const [N,M] = input.shift().split(' ')
const d = Array((+M)+1).fill(10001);
const array = input.map(item => +item)
d[0]=0
console.log(array);

for(let i=0; i <N; i++){
  for(let j=array[i]; j<=M; j++){
    if(d[j-array[i]] != 10001){
      d[j] = Math.min(d[j],d[j-array[i]]+1)
    }
  }
}

if(d[M] === 10001)  console.log(-1);
else console.log(d[M]);