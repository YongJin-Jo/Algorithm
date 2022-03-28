const fs ='4\n3 5 2 7'
const [N,...input] = fs.toString().split('\n')
const array = input.map(item => +item)
const stack =[]
const answer = []
for(let i =0; i< N; i++){
  if(stack !==0){
  }
  if(array[i] < array[i+1]){
    answer.push(array[i+1])
  }else{
    stack.push(array[i])
  }
}