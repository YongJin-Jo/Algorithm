const fs = '3\n8\n10\n16'
const input = fs.toString().split('\n').map(item => +item)
input.shift();
const MAX = Math.max(...input);
let prime = new Array(MAX + 1).fill(true);
let answer = [];
prime[0] = prime[1] = false;

for(let i =2; i<=MAX+1;i++){
  if(prime[i]){
    let m = 2
    while(i*m < MAX+1){
      prime[i*m] = false
      m++
    }
  }
}

input.forEach(v => {
  for(let i=Math.ceil(v/2); i>1; i--){
    if(prime[i] && prime[v-i]){
      answer.push(`${i} ${v-i}`)
      break;
    }
  }
});
console.log(answer.join('\n'));