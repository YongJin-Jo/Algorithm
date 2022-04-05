const fs ='24 18'
const [A,B] = fs.toString().trim().split(' ')

//gcb 최대 공약수 
// lcm 최소 공배수
let gcbNumber = gcb(A,B)

console.log(`${gcbNumber}\n${(A*B)/gcbNumber}`); 

// 유클리드 호재법 사용
function gcb(A,B){
  const remainder = A%B
  if(remainder ===0) return B
  return gcb(B,remainder)
}