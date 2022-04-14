const fs ='11001100'
let n = fs.toString().trim()
let oct =''

while(n.length >=3){
  oct += parseInt(n.slice(n.length-3), 2).toString(8)
  n = n.slice(0, n.length-3);
}
console.log(parseInt(n,2).toString(8)+oct);
