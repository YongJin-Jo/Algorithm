const fs ='10\n1 5 2 1 4 3 4 5 2 1'
const [A,ary] = fs.toString().trim().split('\n')
const dt = ary.split(' ').map(_=> +_)
const increaseDP = new Array(+A).fill(0)
const decreaseDP = new Array(+A).fill(0)
increaseDP[0] =decreaseDP[A-1]  = 1

for(let i=1; i<A; i++){
  const values = [1]
  for(let j=0; j<=i; j++){
    if(dt[i] > dt[j]){
      values.push(increaseDP[j]+1)
    }
  }
  increaseDP[i]= Math.max(...values)
}

for(let i=A-1; i>=0; i--){
  const values = [1]
  for(let j=A-1; j>=i; j--){
    if(dt[i] > dt[j]){
      values.push(decreaseDP[j]+1)
    }
  }
  decreaseDP[i] = Math.max(...values);
}

let r = increaseDP.map((val,index) => val + decreaseDP[index])

console.log(Math.max(...r)-1);