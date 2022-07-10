const fs = '4 4\n1 1 1 1'
const input = fs.toString().trim().split('\n').map(v=>v.trim())
const [N,M] = input[0].split(' ').map(Number);
const dt = input[1].split(' ').map(Number).sort((a,b)=>a-b);
const answer = [];
const result = []
const isCheck = new Array(N).fill(0)
dfs(0)
console.log([...new Set(answer)].join('\n'))

function dfs(x){
  if(x === M) return answer.push(result.join(' '))
  for(let i=0; i<N; i++){
    if(!isCheck[i]){
      result.push(dt[i])
      isCheck[i] = 1
      dfs(x+1)
      result.pop()
      isCheck[i] = 0
    }
  }
}