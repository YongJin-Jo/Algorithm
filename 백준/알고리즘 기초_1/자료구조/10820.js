const fs ='This is String\nSPACE    1    SPACE\n S a M p L e I n P u T     \n0L1A2S3T4L5I6N7E8'
const input = fs.toString().split('\n')
let answer = ''
for(let i=0; i<input.length; i++){
  if(input[i] ==='') continue;

  const strArray =input[i].split('')
  const result = Array(4).fill(0)

  strArray.map(item => {
    if(item >= 'a' && item <='z') result[0]++
    else if(item >="A" && item <='Z') result[1]++
    else if(item === ' ') result[3]++
    else result[2]++
  })

  answer += result.join(' ') +'\n'
}



console.log(answer.trim());