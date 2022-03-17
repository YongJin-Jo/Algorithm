let fs = '5\n5\n4\n3\n2\n1'

let [firstLine, ...data] = fs
  .trim()
  .split("\n")
  .map(v => Number(v));

const input = data.sort((a, b) => a - b);

console.log(input.join("\n"));