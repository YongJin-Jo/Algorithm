const fs ='3 3'
const [N,M] = fs.toString().trim().split(' ').map(_ => +_)
const dt = new Array(M).fill(0)
const answer =[]

dfs(0)
console.log(answer.join('\n'));

function dfs(x){
  if(x === M) return answer.push(dt.join(' ')) 
  for(let i=1; i<=N; i++){
    dt[x] = i
    dfs(x+1)
  }
}