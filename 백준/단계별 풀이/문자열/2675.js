const fs = '2\n3 ABC\n5 /HTP'
const input = fs.toString().split('\n')

function solution(input){
  for(let i = 0; i < input.length; i++){
    let qrAtomClone = []
    let testCace =0
    let j=0
    oneQr = input[i].split(' ');
    testCace = +oneQr.shift()
    qrStr = oneQr.join()

    while(j < qrStr.length){
      const ASCII =  qrStr[j].charCodeAt()
      for(let k =0; k< testCace; k++){
        const ASCIIchar = String.fromCharCode(ASCII)
        qrAtomClone.push(ASCIIchar)
      }
      j++
    }
    
    if(qrAtomClone.length > 0){console.log(qrAtomClone.join(""));}
    
  }
}

solution(input)