const fs ='10'
const input = +fs.toString().trim()
let d =new Array(input +1).fill(0)

for(let i=2; i<d.length; i++){
  d[i] = d[i-1]+1
  if(i % 2 ===0){
    d[i] = Math.min(d[i],d[i/2]+1)
  }   
  if(i % 3 ===0){
    d[i] = Math.min(d[i],d[i/3]+1)
  }
}
console.log(d[input]);
