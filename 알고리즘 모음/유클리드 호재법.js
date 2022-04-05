
// 최대 공배수 
function gcb(A,B){
  const remainder = A%B
  if(remainder ===0) return B
  return gcb(B,remainder)
}