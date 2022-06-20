const fs ='4 2\n9 8 7 1'
const input = fs.toString().trim().split('\n')
const [N,M] = input[0].split(' ').map(_ => +_)
const dt = input[1].split(' ').map(_ => +_).sort((a,b) => a-b)
const answer = new Array(M).fill(0)
const isCheck = new Array(N).fill(0)
dfs(0)

function dfs(x){
  if(x === M) return console.log(answer.join(' '));
  for(let i=0; i<N; i++){
    if(!isCheck.find(item => item === dt[i])){
      answer[x] = dt[i]
      isCheck[i]=dt[i]
      dfs(x+1)
      isCheck[i] =0
    }
    
  }
}
