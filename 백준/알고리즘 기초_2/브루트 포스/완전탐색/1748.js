const fs ='1000000000'.toString().trim()
let answer = 0, gu = 9;
answer = fs.length * (fs - (10**(fs.length-1)) +1);
if(fs.length>1){
  for(let i=1;i<fs.length;i++){
    answer += i * gu;
    gu *= 10;
  }
}
console.log(answer);
