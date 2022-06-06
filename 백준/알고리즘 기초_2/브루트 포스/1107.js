const fs ='99999\n1\n9'
const input = fs.toString().trim().split('\n')
const currentWatingChnal = Math.abs((+input[0])-100)

console.log(Math.min(currentWatingChnal,soultion(input)) );
function soultion(input){
  if(input.length <=2){return input[0].length}
  const TargetNumber = input[0].split('').map(_=>+_)
  const UnStableButton= input[2].split(' ').map(_ => +_)
  const Button = [0,1,2,3,4,5,6,7,8,9]
  const StableButton = Button.filter(item => !UnStableButton.includes(item))
  const answerPush = [] 
  let count

  for(let i=0; i<TargetNumber.length; i++){
    count++
    let but = TargetNumber[i]
    let max =0
    let maxButton =0
    let min = 99
    let minButton=0
    for(let j=0; j<StableButton.length; j++){

      if(answerPush.length <=0 || answerPush[0] >= TargetNumber[0]){
        if(Math.abs(but-StableButton[j]) < min){
          min = Math.abs(but-StableButton[j])
          minButton = StableButton[j]
        }
      }else{
        if(Math.abs(but-StableButton[j]) < min){
          max = Math.abs(but-StableButton[j])
          maxButton = StableButton[j]
        }
      }
    }
    answerPush.length <=0 || answerPush[0] >= TargetNumber[0]? answerPush.push(minButton):answerPush.push(maxButton)
  }
  count = (+answerPush.join('')).toString()
  return  Math.abs((+input[0])-(+answerPush.join('')))+count.length
}




