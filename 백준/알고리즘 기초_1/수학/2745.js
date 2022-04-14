const fs ='ZZZZZ 36'
const inputs = fs.toString().trim().split(' ')
const char = inputs[0].split('').reverse();
const base = Number(inputs[1]);
let result = 0;
for(let i=0; i<char.length;i++){
    if(char[i] >= 'A' && char[i] <= 'Z'){
        char[i] = char[i].charCodeAt(0)-55;
        result += char[i] * Math.pow(base,i);
    }else{
        char[i] = Number(char[i]);
        result += char[i] * Math.pow(base,i);
    }
}
console.log(result);