const fs ='4 5\n1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5\n1 2 3 4 5'
const [NM,...DataTable]=fs.toString().trim().split('\n')
const [N,M] = NM.split(' ').map(_ => +_)
const DT = DataTable.map(item => item.split(' ').map(_ => +_))
const board = new Array(N+5).fill().map(_ => new Array(M+5).fill(0))
console.log(board);
let max = 0
for(let i=1; i<=N; i++){
  for(let j=1; j<=M; j++){
    board[i][j] = DT[i-1][j-1]
  }
}

for(let i=1; i<=N; i++){
  for(let j=1; j<=M; j++){
    const Imino = I(i,j)
    const Omino = O(i,j)
    const Lmino = L(i,j)
    const Tmino = T(i,j)
    const Zmino = Z(i,j)
    max = Math.max(max,Imino,Omino,Lmino,Tmino,Zmino)
  }
}
console.log(max);

function I (i,j){
  let i_0 =0
  let i_90 = 0
  for(let k=0; k<4; k++){i_0 += board[i+k][j]} 
  for(let k=0; k<4; k++){i_90 += board[i][j+k]}
  return Math.max(i_0,i_90)
}


function O(i,j){
  let o = 0
  for(let k =0; k<2; k++){
    o = board[i+k][j]+ board[i+k][j+1]
  }
  return o
}


function L(i,j){
  let l_0 = 0,l_90= 0,l_180= 0,l_270= 0
  let l_r_0= 0 ,l_r_90= 0, l_r_270= 0,l_r_180= 0
  

  for(let k=0; k<3; k++){
    l_0 += board[i+k][j]
    l_90 += board[i][j+k]
  }
  
  l_r_0 = l_0 + board[i+2][j-1]
  l_r_90 = l_90 + board[i+1][j+2]
  l_r_180 = l_0 + board[i][j+1]
  l_r_270 =l_90 + board[i-1][j+2]?board[i-1][j+2]:0

  
  l_180 = l_0 + board[i][j-1]
  l_270 += (board[i-1][j]?board[i-1][j]:0)
  l_0 += board[i+2][j+1]
  l_90 += board[i+1][j]

  return Math.max(l_0,l_180,l_270,l_90,l_r_0,l_r_180,l_r_270,l_r_90)
} 

function T(i,j){
  let t_0 =0, t_90 =0
  let t_r_0 =0, t_r_90 =0

  for(let k=0; k<3; k++){
    t_0 += board[i][j+k]
    t_90 += board[i+k][j]
  }

  t_r_0 = t_0 + (board[i-1][j+1]? board[i-1][j+1]:0)
  t_r_90 = t_90 + board[i+1][j+1]
  t_0 += board[i+1][j+1]
  t_90 += board[i][j-1]
  return Math.max(t_0,t_90,t_r_0,t_r_90)
}

function Z(i,j){
  let z_0 =0, z_90 = 0
  let z_r_0 =0, z_r_90 =0
  for(let k=0; k<2; k++){
    z_0 += board[i+k][j]
    z_90+= board[i][j+k]
  }
  z_r_0 = z_0 + board[i][j+1] + board[i+1][j-1]
  z_r_90 = z_90 + (board[i-1][j+1]?board[i-1][j+1]:0) + board[i+1][j]
  z_0 += board[i][j-1] + board[i+1][j+1]
  z_90 +=board[i-1][j] + board[i+1][j+1]
  return Math.max(z_0,z_90,z_r_0,z_r_90)
}