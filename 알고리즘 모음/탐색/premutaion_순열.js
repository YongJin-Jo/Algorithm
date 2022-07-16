// 다음 순열
const nextPermutation = function(N, arr){
  const arrCopy = [...arr].sort((a, b) => b - a);
  if (arr.every((v, i) => v === arrCopy[i])) {
    console.log(-1);
  } else {
    let i = N - 2;
    while (arr[i] > arr[i+1]) {
      i--;
    }

    let j = N - 1;
    while (arr[i] > arr[j]) {
      j--;
    }
    
    [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
    console.log([...arr.slice(0, i+1), ...arr.slice(i+1).sort((a, b) => a - b)].join(' '));
  }
};


// 이전 순열
const prevPermutation = function(N, arr){
  const arrCopy = [...arr].sort((a,b) => a-b)
  if(arr.every((v,i) => v === arrCopy[i])){
    console.log(-1);
    return
  }

  let i=N-2;
  let j=N-1;
  while(arr[i] > arr[i+1])  i--;
  while(arr[i] > arr[j]) j--;

  [arr[i],arr[j]] = [arr[j],arr[i]];
  console.log([...arr.slice(0, i+1), ...arr.slice(i+1).sort((a, b) => b-a)].join(' '));
}