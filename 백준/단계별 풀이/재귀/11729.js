const fs = '4'
const input = fs.toString()

const arr =[]

function move(n, from,to){
  const middle = 6-from-to

  if(n ===1){
    return arr.push(`${from} ${to}`);
  }else if(n >=2){
    move(n-1, from, middle)
    move(1, from, to)
    move(n-1, middle, to)
  }
}
move(+input,1,3)
console.log(arr.length);
console.log(arr.join('\n'));
