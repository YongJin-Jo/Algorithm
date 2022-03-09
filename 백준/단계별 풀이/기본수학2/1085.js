const fs ='6 2 10 3'
const input = fs.toString().split(' ').map(item => +item)

soultion(input)

function soultion(number){
  const [x,y,w,h] = number
  
  const counters = [x,y,w-x,h-y]

  console.log(Math.min(...counters));

  

}