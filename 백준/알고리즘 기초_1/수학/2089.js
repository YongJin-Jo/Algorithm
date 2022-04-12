const fs = '-13'
const inputs = fs.toString();
const num = Number(inputs);
let tmp = num;
const answer = [];
while(tmp/-2 !== 0){
    let remainder = tmp%-2;
    if(remainder == -1 || remainder == 1){
        tmp = Math.floor(tmp/-2)+1;
        answer.push(1);
    }else if(remainder === 0){
        tmp = Math.floor(tmp/-2);
        answer.push(0);
    }
}
console.log(answer.length === 0 ? 0 : answer.reverse().join(''));