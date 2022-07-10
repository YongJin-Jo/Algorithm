const fs = '4 4'
const [N,M] = fs.toString().trim().split(' ').map(_ => +_)
const arr = new Array(M).fill(0)
const isUsed = new Array(N+1).fill(0)
function dfs(x){
  if(x === M){return console.log(arr.join(' '))}
  for(let i=1; i<=N; i++){
    if(!isUsed[i]){
      isUsed[i]=1
      arr[x]=i
      dfs(x+1)
      isUsed[i] =0
    }
  }
}

dfs(0)
