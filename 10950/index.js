//문제 유형 반복뭄

const fs ='5\n1 1\n2 3\n3 4\n9 8\n5 2'
const input = fs.toString().trim().split('\n')

for(let i=1; i <= +input[0]; i++){
  let j =0
  const arr = input[i].split(' ')
  console.log((+arr[j])+(+arr[j+1]));
}