const fs = 'dz=ak'
const input = fs.toString().split('\n')

solution(input[0])

function solution(str){
  let answer = 0
  for(let i =0; i < str.length; i++){
    let c = str[i]
    answer++

    if( i === str.length-1){
      continue;
    }

    if(c == 'c'){
      const nextC = str[i+1] 
      if(nextC == '=' || nextC  == '-' ) {
        i += 1
        continue
      }
    }

    if(c =='d'){
      const nextC = str[i+1] 
      if(nextC  == '-' ) {
        i += 1
        continue
      }
      if(i < str.length -2){
        const nextNextC = str[i+2] 
        if(nextC == 'z' && nextNextC == '='){
          i+=2
          continue
        }
      }
    }

    if(c == 'l'){
      const nextC = str[i+1] 
      if(nextC == 'j') {
        i += 1
        continue
      }
    }
    if(c == 'n'){
      const nextC = str[i+1] 
      if(nextC == 'j') {
        i += 1
        continue
      }
    }
    if(c == 's'){
      const nextC = str[i+1] 
      if(nextC == '=') {
        i += 1
        continue
      }
    }
    if(c == 'z'){
      const nextC = str[i+1] 
      if(nextC == '=') {
        i += 1
        continue
      }
    }
  }
  console.log(answer);
}