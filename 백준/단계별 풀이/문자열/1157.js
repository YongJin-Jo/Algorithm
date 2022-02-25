const fs = 'zZa'
const input = fs.toString().split('\n')
//const inputFillter = input.filter((item,index )=> input.indexOf(item) === index)
//const countarr = Array(inputFillter.length).fill(0)
//let max = 0
//let count = 0
//let  findIndex =0
//for(let i = 0; i<input.length;i++){
//  const findIndex = inputFillter.findIndex(itme => itme === input[i])
//  countarr[findIndex] += 1
//}
//
//max = Math.max(...countarr)
//
//for(let i =0; i< countarr.length; i++){
//  if(max === countarr[i]){count ++}
//}
//console.log(inputFillter,countarr);
//
//if(count >=2){
//  console.log("?");
//}else{
//  findIndex = countarr.findIndex(itme => itme === max)
//  console.log(inputFillter[findIndex]);
//}

solution(input[0])

function solution(str){
  let obj ={}
  for(let i = 0; i < str.length; i++){
    let newChar = str[i].toUpperCase()
    if(obj[newChar]){
      obj[newChar]++;
    }else{
      obj[newChar]= 1;
    }
  }

  let maxValue = 0;
  let maxChar = '';
  let isDuplicate =false
  for(key in obj){
    if(obj[key] > maxValue){
      maxValue = obj[key]
      maxChar = key
      isDuplicate = true
    }else if(obj[key] === maxValue){
      isDuplicate = false
    }
  }

  if(!isDuplicate){
    console.log('?');
  }else{
    console.log(maxChar);
  }

}