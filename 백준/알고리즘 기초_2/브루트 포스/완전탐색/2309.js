const fs = '20\n7\n23\n19\n10\n15\n25\n8\n13'
const input = fs.toString().trim().split('\n').map(_=> +_).sort((a,b) => a-b)
const allSum = input.reduce((prev,next) =>prev += next,0)
const sum = allSum - 100
const sort =[]
const answer =[]
for(let i=0; i<input.length-1; i++){
  for(let j = i+1; j<input.length; j++){
    if(input[i]+input[j]  === sum){
      sort.push(input[i])
      sort.push(input[j])
    }
  }
}

for(let i=0; i<input.length; i++){
  if(input[i] !==sort[0] && input[i] !== sort[1]){
    answer.push(input[i])
  }
}


console.log(answer.join('\n'));