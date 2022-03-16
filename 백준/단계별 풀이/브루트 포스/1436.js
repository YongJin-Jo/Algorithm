const fs = '2'
const input = fs.toString()
const N = +input
solution()

function solution(){
  let number =667
  let count = 1
  let answer
  while(true){
    let str = number.toString().length

    if(N === 1){
      console.log(666);
      break
    }
    
    for(let i=0; i<str; i++){
      let arr = str.split('').map(itme =>+itme)
      if(arr[i] === 6){
        if(arr[i+1] ===6 && arr[i+2] ===6){
          console.log(arr);

        }
      }
    }
    
    if(count === N){
      console.log(answer);
      break;
    }
    number++

  }
}