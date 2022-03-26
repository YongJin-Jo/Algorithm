const fs ='7 3'
let [N,K] = fs.toString().split(' ').map(item =>+item)
const circle = new Array(N).fill(0).map((el, i) => i + 1);
let result =[]

while(circle.length){
  if(circle.length>K-1){
    for(let i=0; i < K-1; i++){
      circle.push(circle.shift())
    }
  }
  result.push(circle.shift())
}

console.log(`<${result.join()}>`);