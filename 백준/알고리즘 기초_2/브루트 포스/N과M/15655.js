const fs ='4 4\n1231 1232 1233 1234'
const [first,secend] = fs.toString().split('\n')
const [N,M] = first.split(' ').map(_ => +_)
const dt = secend.split(' ').map(_=> +_).sort((a,b) => a-b)
const answer = new Array(M).fill(0)
const isCheck = new Array(N).fill(0)
dfs(0,0)

function dfs(x,prev){
  if(x === M) return console.log(answer.join(' '));
  for(let i=0; i<N; i++){
    if(!isCheck.find(item => item === dt[i]) && prev < dt[i]){
      answer[x] = dt[i]
      isCheck[i]=dt[i]
      dfs(x+1,dt[i])
      isCheck[i] =0
    }
    
  }
}