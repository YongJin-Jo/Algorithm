const fs ='4 2\n9 8 7 1'
const [NM,arr] = fs.toString().trim().split('\n')
const [N,M] = NM.split(' ').map(_ => +_)
const dt = arr.split(' ').map(_ => +_).sort((a,b) => a-b)
const answer = new Array(M).fill(0)

dfs(0,0)
function dfs(x,icount){
  if(x === M) return console.log(answer.join(' '))
  for(let i=0; i<N; i++){
    if( dt[i] >= icount){
      answer[x] = dt[i]
      dfs(x+1, dt[i])
    }
  }
}