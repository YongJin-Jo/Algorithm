const fs = '1 16 16'
const [E,S,M] = fs.split(' ').map(_=> +_)
let Y = 1;
while(1){
  if((Y-E)%15==0 && (Y-S)%28==0 && (Y-M)%19==0){
    console.log(Y)
      process.exit();
  }else{
    Y++;
  }
}
