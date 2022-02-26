const fs = 'baekjoon'
const input = fs.toString().trim()
function soultion(input){
  const arr = Array(26).fill(-1)

  for(let i =0; i <input.length; i++){
    const index = input[i].charCodeAt()-97
    console.log(i, index);
    if (arr[index] === -1) {
      arr[index] = i;
    }
  }
  console.log(arr.join(' '));
}

soultion(input)