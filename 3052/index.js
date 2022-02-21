const fs ='1\n2\n3\n4\n5\n6\n7\n8\n9\n10'
const fs1 ='42\n84\n252\n420\n840\n126\n42\n84\n420\n126'
const input = fs.toString().trim().split('\n').map(item => +item)
const mod = input.map(itme => itme%42)
const modFilter = mod.filter((itme,index) =>{
  return mod.indexOf(itme) === index
})
console.log(modFilter.length);
