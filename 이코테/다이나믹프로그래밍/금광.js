const fs ='2\n3 4\n1 3 3 2 2 1 4 1 0 6 4 7\n4 4\n1 3 1 5 2 2 4 1 5 0 2 3 0 6 1 2'
const input = fs.toString().trim().split('\n')
const T = input.shift()

soution(T,input)

function soution(T,input){
  for(let i=0; i<T; i++){
    let [n,m] =input.shift().split(' ').map(item => +item)
    let l = input.shift().split(' ').map(item => +item)
    let array = strSplit(n,m,l)
    let dp = [...array]
    let reulst =0
    
    for(let j=1; j<m; j++){
      for(let k=0; k <n;k++){
        let leftUp, leftDown,left
        if(k==0) leftUp=0;
        else leftUp = dp[k-1][j-1]
        if(k == n-1) leftDown = 0;
        else leftDown = dp[k+1][j-1]
        left = dp[k][j-1];
        dp[k][j] = dp[k][j]+ Math.max(leftUp,leftDown,left);
      }
    }
    for(let i=0; i<n; i++){
      reulst= Math.max(reulst,dp[i][m-1])
    }
    console.log(reulst);
  }
}

function strSplit(n,m,l){
  const result =[]
    for(let i=0; i<n; i++){
      const b = []
      for(let j=0; j<m; j++){
        b.push(l.shift())
      }
      result.push(b)
    }
  return result
}


