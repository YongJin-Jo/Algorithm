const fs ='3 3\n1231 1232 1233'
const [first,secend] = fs.toString().trim().split('\n')
const [N,M] = first.split(' ').map(_ => +_)
const dt = secend.split(' ').map(_ => +_).sort((a,b) => a-b)
const answer = new Array(M).fill(0)

solve(N, M, dt);

function solve(N, M, arr){
  const permutation = [];
  const output = [];
  const recursion = () => {
    if (permutation.length === M) {
      output.push(permutation.join(' '));
    } else {
      for (const i of arr) {
        permutation.push(i);
        recursion();
        permutation.pop();
      }
    }
  };

  recursion();
  console.log(output.join('\n'));
};