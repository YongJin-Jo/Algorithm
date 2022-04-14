const fs ='60466175 36'
const [N,B] = fs.toString().trim().split(' ')
const number = BigInt(N).toString(B).toLocaleUpperCase()

console.log(number);