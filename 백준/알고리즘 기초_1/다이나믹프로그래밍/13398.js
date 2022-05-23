const fs = '10\n10 -4 3 1 5 6 -35 12 21 -1'
const [n,ary] = fs.toString().trim().split('\n')
const dt = ary.toString().split(' ').map(_ => +_)
const dpL2R = []
const dpR2L = []
let r
dpL2R[0] =dt[0]
dpR2L[n-1] =dt[n-1]

for(let i=1; i<n; i++){
  dpL2R[i] = Math.max(dpL2R[i-1]+dt[i],dt[i])
}
for(let i=n-2; i>=0; i--){
  dpR2L[i] = Math.max(dpR2L[i+1]+dt[i],dt[i])
}

r = Math.max(...dpL2R)
for(let idxX=0; idxX<n; idxX++) {
  console.log(idxX,r,dpL2R[idxX-1],dpR2L[idxX+1]);
  if(idxX>0)
      r = Math.max(r, dpL2R[idxX-1]);
  if(idxX<n-1)
      r = Math.max(r, dpR2L[idxX+1]);

  if(idxX>0 && idxX<n-1)
      r = Math.max(r, dpL2R[idxX-1] + dpR2L[idxX+1]);
}

console.log(r);
