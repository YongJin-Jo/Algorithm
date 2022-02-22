const fs = '5\n5 50 50 70 80 100\n7 100 95 90 80 70 60 50\n3 70 90 80\n3 70 90 81\n9 100 99 98 97 96 95 94 93 91'
const input = fs.toString().trim().split('\n')

let num = +input[0];

for (let i = 1; i <= num; i++) {
    let score = input[i].split(' ');

    let num2 = score.shift() * 1;

    let count = 0;
    
    let avg = score.reduce((acc, v) => acc += v * 1, 0);
    
    avg /= num2;

    for (let j = 0; j < num2; j++) {
        if (score[j] > avg) {
            count++;
        }
    }
    
    let result = ((count / num2) * 100).toFixed(3);
    console.log(result + "%");
}