const fs ='4 10\n1 2 1 2 1 2 1 2 1 2\n2 1 2 1 2 1 2 1 2 1\n1 2 1 2 1 2 1 2 1 2\n2 1 2 1 2 1 2 1 2 1'
const [NM,...DataTable]=fs.toString().trim().split('\n')
const [N,M] = NM.split(' ').map(_ => +_)
const board = DataTable.map(item => item.split(' ').map(_ => +_))
let max = 0
for(let i=0; i<N; i++){
  for(let j=0; j<M; j++){
    max= Math.max(max,
                  I0(i,j),
                  I90(i,j),
                  O(i,j),
                  L0(i,j),
                  L90(i,j),
                  L180(i,j),
                  L270(i,j),
                  LR0(i,j),
                  LR90(i,j),
                  LR180(i,j),
                  LR270(i,j),
                  T0(i,j),
                  T90(i,j),
                  TR0(i,j),
                  TR90(i,j),
                  Z0(i,j),
                  Z90(i,j),
                  ZR0(i,j),
                  ZR90(i,j)
                  )
  }
}

console.log(max);

function I0 (i,j){
  if(j+3<M){
    return board[i][j] +board[i][j+1]+board[i][j+2]+board[i][j+3]
  }
  return 0
}

function I90 (i,j){
  if(i+3<N){
    return board[i][j] +board[i+1][j]+board[i+2][j]+board[i+3][j]
  }
  return 0
}

function O(i,j){
  if(i+1<N && j+1<M ){
    return board[i][j]+board[i][j+1]+board[i+1][j]+board[i+1][j+1]
  }
  return 0
}

function L0(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i+1][j]+board[i+2][j]+board[i+2][j+1]
  }
  return 0
}

function L90(i,j){
  if(i+1<N &&j+2<M ){
    return board[i][j]+board[i][j+1]+board[i][j+2]+board[i+1][j]
  }
  return 0
}

function L180(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i][j+1]+board[i+1][j+1]+board[i+2][j+1]
  }
  return 0
}

function L270(i,j){
  if(i+1<N && j+2<M){
    return board[i][j+2]+board[i+1][j]+board[i+1][j+1]+board[i+1][j+2]  
  }
  return 0;
}

function LR0(i,j){
  if(i+2<N && j+1<M){
    return board[i][j+1]+board[i+1][j+1]+board[i+2][j+1]+board[i+2][j]
  }
  return 0
}

function LR90(i,j){
  if(i+1<N && j+2<M){
    return board[i][j]+board[i][j+1]+board[i][j+2]+board[i+1][j+2]
  }
  return 0
}

function LR180(i,j){
  if(i+2<N&& j+1<M){
    return board[i][j]+board[i+1][j]+board[i+2][j] +board[i][j+1]
  }
  return 0
}

function LR270(i,j){
  if(i-1>=0 && j+2<M){
    return board[i][j]+board[i][j+1]+board[i][j+2]+board[i-1][j]
  }
  return 0
}

//board[i][j]
function Z0(i,j){
  if(i+1 <N && j+2 <M){
    return board[i][j]+board[i][j+1]+board[i+1][j+1]+board[i+1][j+2]
  }
  return 0
}

function Z90(i,j){
  if(i+2<N && j+1<M){
    return board[i][j+1]+board[i+1][j]+board[i+1][j+1]+board[i+2][j]
  }
  return 0
}

function ZR0(i,j){
  if(i+1<N&& j+2<M){
    return board[i][j+1]+board[i][j+2]+board[i+1][j]+board[i+1][j+1]
  }
  return 0
}

function ZR90(i,j){
  if(i+2<N && j+1<M){
    return board[i][j]+board[i+1][j]+board[i+1][j+1]+board[i+2][j+1]
  }
  return 0
}

function T0(i,j){
  if(i+1<N&& j+2<M){
    return board[i][j]+board[i][j+1]+board[i][j+2]+board[i+1][j+1]
  }
  return 0
}
function T90(i,j){
  if(i+2<N&& j+1<M){
    return board[i+1][j]+board[i][j+1]+board[i+1][j+1]+board[i+2][j+1]
  }
  return 0
}
function TR0(i,j){
  if(i+1<N&& j+2 <M){
    return board[i][j+1]+board[i+1][j]+board[i+1][j+1]+board[i+1][j+2]
  }
  return 0
}
function TR90(i,j){
  if(i+2<N&& j+1<M){
    return board[i][j]+board[i+1][j]+board[i+2][j]+board[i+1][j+1]
  }
  return 0
}
