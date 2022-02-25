const fs = '4\naba\nabab\nabcabc\na'
const input = fs.toString().split('\n')


solution(+input[0], input.slice(1));

function solution(N, arr) {
    let answer = 0;
    for (let i = 0; i < N; ++i) {
        let nowS = arr[i];
        let obj = {};
        let nowContC = nowS[0];
        obj[nowContC] = true;
        let isGroupWord = true;
        for (let j = 1; j < nowS.length; ++j) {
            if (nowContC !== nowS[j]) {
              console.log(nowContC,nowS[j]);
                if (obj[nowS[j]]) {
                    isGroupWord = false;
                } else {
                    nowContC = nowS[j];
                    obj[nowS[j]] = true;
                }
            }
        }
        if (isGroupWord) {
            answer++;
        }
    }
    console.log(answer);
}
