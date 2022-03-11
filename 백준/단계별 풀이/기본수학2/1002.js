const fs ='3\n0 0 13 40 0 37\n0 0 3 0 7 4\n1 1 1 1 1 5'
const input = fs.toString().split('\n')

soultion(input)


function soultion(arg){
  const T = arg.shift()
  for(let i=0; i<T; i++){
    const [x1, y1, r1, x2, y2, r2] = arg[i].split(' ').map(item => parseInt(item))
    
    const p1 = {x:x1, y:y1}
    const p2 = {x:x2, y:y2}

    const squaredDistance = getSquaredDistance(p1, p2)
    console.log(findPointsCount(squaredDistance,r1,r2));
  }
} 

function getSquaredDistance(p1,p2){
  return ((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2) // 내접인지 외접인지 확인
}

function findPointsCount(d,r1,r2){
  const squaredSumR = (r1 + r2)**2
  const squaredDiffR  = (r2 - r1)**2

  if(d == 0){
    //원 점이 같을 때
    if(r1 == r2) return -1
    return 0
  }else{
    if(d > squaredSumR || d < squaredDiffR) {
      // Case4 : 0개일때
      return 0
    } else if(d == squaredDiffR || d == squaredSumR){
      // case 1,2: 1개일때(내접 또는 외접)
      return 1
    } else if(d < squaredSumR){
      // case 3: 2개일떄
      return 2
    }
  }
}