const fs = '4 2\n9 7 9 1'
const input = fs.toString().trim().split('\n').map(v=>v.trim())
const [N,M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number).sort((a,b)=>a-b);

const answer = [];
solve([],0)
console.log([...new Set(answer)].join('\n'))


function solve(arr,used){
  console.log(arr);
  if(arr.length==M){
    answer.push(arr.join(' '))
  }else{
    for(let i = 0; i<nums.length; i++){

      if(!(used&(1<<i))){
        solve([...arr,nums[i]],used|(1<<i))
      }
    }
  }
}
