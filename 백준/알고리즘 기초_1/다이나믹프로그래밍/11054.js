const fs ='8\n7 8 7 9 5 7 5 2'
const [A,ary] = fs.toString().trim().split('\n')
const dt = ary.split(' ').map(_=> +_)
const upDP = new Array(+A).fill(0)
const donwDP = new Array(+A).fill(0)
upDP[0] =donwDP[0]  = 1
for(let i=1; i<A; i++){
  for(let j=0; j<=i; j++){

    if(dt[i] > dt[j]){
      upDP[i] = Math.max(upDP[i],upDP[j])
    }
  }
  upDP[i] +=1
}
for(let i=A-1; i>=0; i--){
  for(let j=A-1; j>=i; j--){

    if(dt[i] > dt[j]){
      donwDP[i] = Math.max(donwDP[i],donwDP[j])
    }
  }
  donwDP[i] +=1
}
let r = upDP.map((val,idx) => val + donwDP[idx])
console.log(upDP,donwDP);
console.log(Math.max(...r)-1);