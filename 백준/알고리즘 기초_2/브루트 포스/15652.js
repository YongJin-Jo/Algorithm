const fs ='3 1'
const [N,M]= fs.toString().trim().split(' ').map(_ => +_)
const dt =new Array(M).fill(0)

dfs(0,0)

function dfs(x,icount){
  if(x === M) return console.log(dt.join(' '));
  for(let i=1; i<=N; i++){
    if(i>=icount){
      dt[x] = i
      dfs(x+1,i)
    }
  }
}