const fs =`10 5\n1 10 4 9 2 3 8 5 7 6`
const input = fs.toString().trim().split('\n')
const row1 = input[0].split(' ').map(item=>+item)
const row2 = input[1].split(' ').map(item => +item)
let answer = '';

for(let i =0; i<row1[0]; i++){
  if(row2[i]<row1[1]){

    answer = answer + row2[i] + ' '
  }
}

console.log(answer);

// join을 이용한 풀이
let answer2 = [];

for(let i =0; i<row1[0]; i++){
  if(row2[i]<row1[1]){

    answer2.push(row2[i])
  }
}

console.log(answer2.join(' '));
