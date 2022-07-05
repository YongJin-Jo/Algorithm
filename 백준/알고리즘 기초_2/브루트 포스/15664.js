const fs ='3 1\n4 4 2'
const [F,S] = fs.toString().trim().split('\n')
const [N,M] = F.split(' ').map(_ => +_)
const dt = S.split(' ').map(_ => +_).sort((a,b) => a-b)
const result = []
const isCheck = new Array(N).fill(0)
let answer = []
dfs(0,0)
console.log([...new Set(answer)].join('\n'));

function dfs(x,icount){
  if(x === M) return answer.push(result.join(' '));
  for(let i=0; i<N; i++){
    if(!isCheck[i] && icount <= dt[i]){
      result.push(dt[i])
      isCheck[i] =1
      dfs(x+1,dt[i])
      result.pop()
      isCheck[i] =0
    }
  }
}


