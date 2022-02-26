//문제 유형 조건문 
const fs ='6 2 5'
const input = fs.split(' ').map(_=>+_).sort((a,b)=> a-b)

const A = input[0]
const B = input[1]
const C = input[2]

if( A == B && B ==C ){
   console.log(10000+ A *1000);
}else if(A == B || B == C ){
  console.log(1000+A*100)
}else{
  console.log(C*100);
}