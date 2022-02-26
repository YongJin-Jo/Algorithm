const fs ='5\n1 1\n2 3\n3 4\n9 8\n5 2'
const input = fs.toString().trim().split('\n');
let arr= [];
for(let i =0; i< input.length; i++){
  arr.push(input[i].split(' ')) 
}

for(let i = 1; i<=+arr[0]; i++){
  const j= 0
  console.log(`Case #${i}: ${arr[i][j]} + ${arr[i][j+1]} = ${(+arr[i][j])+(+arr[i][j+1])}`);
}