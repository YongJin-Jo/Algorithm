const fs ='4 4\n1 1 2 2'
const [F,S] = fs.toString().trim().split('\n')
const [N,M] = F.split(' ').map(_ => +_)
const dt = S.split(' ').map(_ => +_).sort((a,b) => a-b)
const result = new Array(M).fill(0)
const answer =[]

dfs(0)
console.log([...new Set(answer)].join('\n') );

function dfs(x){
  if(x === M) return answer.push(result.join(' '))
  for(let i=0; i<N; i++){
    result[x] = dt[i]
    dfs(x+1)
    result[x] =0
  }
}