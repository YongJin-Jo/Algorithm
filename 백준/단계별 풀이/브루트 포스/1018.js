const fs ='9 23\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBBBBW'
const input = fs.toString().split('\n')
const NM = input.shift().split(' ').map(item =>+item)
const black =['BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB']
const white =['WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW','WBWBWBWB','BWBWBWBW']
const N = NM.shift()
const M = NM.shift()
const board = []
let answer = 90
solution(input)

function solution(arg){
  for(let i=0; i<N; i++){
    board[i] = arg.shift().split('');
  }
  // (x,y) 부터(x+8,y+8) 범위 체크 ex(1,1) (9,9)
  for(let i =0; i <=N-8; i++){
    for(let j=0; j <=M-8; j++){
      check(i,j)
    }
  }
  console.log(answer);
}

function check(x, y) {
  let checkWhite = 0;
  let checkBlack = 0;
  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (board[i][j] !== white[i-x][j-y])
        checkWhite++;
      if (board[i][j] !== black[i-x][j-y])
        checkBlack++;
    }
  }

  let min = checkBlack < checkWhite ? checkBlack : checkWhite;
  
  if (min < answer)
    answer = min;
}
