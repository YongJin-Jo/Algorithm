const fs ='4 4\n1 1 2 2'
const [F,S] =fs.toString().trim().split('\n')
const [N,M] = F.toString().split(' ').map(_ => +_)
const dt = S.toString().split(' ').map(_ => +_).sort((a,b) => a-b)
const result = new Array(M).fill(0)
const answer =[]
const isCheck = new Array(N).fill(0)

dfs(0,0)
console.log([... new Set(answer)].join('\n'));

function dfs(x,icont){
  if(x===M) return answer.push(result.join(' '))
  for(let i=0; i<N; i++){
    if(icont <= dt[i]){
      result[x] =dt[i]
      dfs(x+1,dt[i])
      result[x] =0
    }
  }
}