let hoursElement=document.querySelector('.hours')
let minutesElement=document.querySelector('.minutes')
let secondsElemnt=document.querySelector('.seconds')

let date=new Date()

let hours=date.getHours()
let minutes=date.getMinutes()
let seconds=date.getSeconds()



let degOfSeconds
let degOfMinutes
let degOfHours

let daysCount=0

rotateOfHands()


setTimeout(function(){
secondsElemnt.style.transition='transform 0.000001ms'
minutesElement.style.transition='transform 0.000001ms'
hoursElement.style.transition='transform 0.000001ms'
},0.001)

setInterval(function(){
    delete date.getVarDate
    date=new Date()
    hours=date.getHours()
    minutes=date.getMinutes()
    seconds=date.getSeconds()
    if(hours==0)
        daysCount++
    hours=(daysCount*24)+hours
    rotateOfHands()
},1000)







function rotateOfHands(){
   seconds=(hours*3600)+(minutes*60)+seconds
    degOfSeconds=seconds*6
    degOfMinutes=seconds/10
    degOfHours=seconds/120
    secondsElemnt.style.transform='translate(-50%,-50%) rotate('+(degOfSeconds)+'deg)'
    minutesElement.style.transform='translate(-50%,-50%) rotate('+(degOfMinutes)+'deg)'
    hoursElement.style.transform='translate(-50%,-50%) rotate('+(degOfHours) +'deg)'
}