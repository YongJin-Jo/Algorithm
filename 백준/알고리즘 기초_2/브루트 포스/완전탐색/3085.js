const fs= '3\nCCP\nCCP\nPPC'
const [N,...candy] = fs.toString().trim().split('\n')
const board = candy.map(item => item.split('') )
const rowMax =0
const colMax =0
for(let i=0; i<board.length-1; i++){
  const row = board[i]
  for(let j=0; j<row.length; j++){
    if(j+1 < row.length && row[j] != row[j+1]){
      let temp = row[j]
      row[j]= row[j+1]
      row[j+1]= temp  
    }
  }
}



console.log(board.join('\n'));