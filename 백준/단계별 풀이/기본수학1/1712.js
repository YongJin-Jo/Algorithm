const fs = '3 2 1'
const input = fs.toString().split('\n')
solution(input[0])

//A: 고정비용  1000 B: 가변비용  70 C:노트북 가격 170 //손익 분기점 > 고정비용 + 가변기용 
// A+(B*생산개수) 총비용
//function solution(str){
//  const  totalCost =  str.split(' ').map(item => +item)
//  const A = totalCost[0]
//  const B = totalCost[1]
//  const C = totalCost[2]
//  let amount = 1
//
//  while(true){
//    const productionCost = A +(B *amount) // 총생산비용
//    const salesVolume = C*amount  // 총판매량
//
//    if( C < B){
//      console.log(-1);
//      break;
//    }    
//
//    if(productionCost < salesVolume){
//      console.log(amount);
//      break;
//    }
//
//    amount++
//  }
//}

/// 풀이
// 고정비용만 매꾸면 영업이익인 셈이니까 마신에서 고정비용을 나누고 1을 더하면 된다.
//마진: C-B
function solution(str){
  const  totalCost =  str.split(' ').map(item => +item)
  const A = totalCost[0]
  const B = totalCost[1]
  const C = totalCost[2]

  const margin = C-B
  const count = Math.floor(A /margin)+1
  console.log(margin <=0? -1:count );
}
