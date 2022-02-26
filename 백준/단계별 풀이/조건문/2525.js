//문제 유형 조건문 

const fs = `23 48\n25`
const input = fs.split('\n')
const arr1 = input[0].split(' ');
const arr2 = input[1]


const hours = Number(arr1[0])
const min = Number(arr1[1])
const setWillMins = Number(arr2)

// 방법 1 60분 기준으로 
if(setWillMins+min >= 60 ){
    const setWillhours = Math.floor((setWillMins+min)/ 60)
    const setMin = Math.floor((setWillMins+min) %60)
    if(hours + setWillhours >= 24){
        const overHours = Math.floor((hours + setWillhours) % 24)
        const setHours = overHours
        console.log(`${setHours} ${setMin}`)
    }else{
        const setHours = hours+setWillhours
        console.log(`${setHours} ${setMin}`)
    }
    
}else{
    const setMin = setWillMins + min
    console.log(`${hours} ${setMin}`)
}
// 방법 2 모든 사긴은 분단위로 바꾼후 시간을 계산한다.

const anyTimeMinOfHour =parseInt(( hours * 60 + min + setWillMins)/60)

const anyTimeMinOfMin =parseInt(( hours * 60 + min + setWillMins)%60)

console.log(anyTimeMinOfHour >=24? anyTimeMinOfHour-24:anyTimeMinOfHour ,anyTimeMinOfMin);
