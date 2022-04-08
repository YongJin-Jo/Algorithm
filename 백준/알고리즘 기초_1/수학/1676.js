//n!을 소인수 분해했을 때 10의 개수 구하기
// 2지수, 5지수의
const fs ='10'
const inputs = fs.toString().trim()
let inputs5 = Number(inputs);
let inputs2 = Number(inputs);
let answer5 = 0;
let answer2 = 0;
while(inputs5 >= 5){
	answer5 += parseInt(inputs5 / 5);
	inputs5 /= 5;
}

while(inputs2 >=2){
    answer2 += parseInt(inputs2 / 2);
    inputs2 /= 2;

}
console.log(Math.min(answer5, answer2));

