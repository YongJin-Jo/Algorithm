const fs = '5'
const input = +fs.toString().trim();

for(let i = 1; i <= input; i++){
  let answer = ''

  for(let j=0; j <input; j++){

    if(j >= input-i){
      answer=answer +'*'
    }else{
      answer=answer +' '
    }
    
  }
  console.log(answer);
}
// 다른 방식 2

for (let i = 0; i < input; i++) {
  let star = '';
    
  for (let j = input - 1; j >= 0; j--) {
    star += j <= i ? '*' : ' ';
  }
  
  console.log(star);
}

// join을 이용한 방식
let star = new Array(input).fill(' ');

for (let i = input - 1; i >= 0; i--) {
  star[i] = '*';
  
  console.log(star.join('')); 
}
