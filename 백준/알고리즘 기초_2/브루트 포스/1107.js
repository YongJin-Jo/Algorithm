const fs ='80000\n2\n8 9'
const [N,M,arr] = fs.split('\n')
const Narr = N.split('').map(_ => +_)
const Barr = arr.split(' ').map(_=> +_)
const answer = []
let count =0


for(let i=0; i<Narr.length; i++){
  let number = Narr[i]
  while (Barr.includes(number)) {
      number--
  }
  answer.push(number)
  count++
}
console.log(answer);
let A = +N
let B = +answer.join('')

if(A<B){
  while (A<B) {
    A++
    count++

  }
}else{
  while (B<A) {
    B++
    count++
  }
}



console.log(count );