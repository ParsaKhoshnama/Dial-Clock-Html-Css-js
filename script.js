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

rotateOfHands()
setTimeout(function(){
secondsElemnt.style.transition='transform 1s'
minutesElement.style.transition='transform 1s'
hoursElement.style.transition='transform 1s'
},0.001)
/*
setInterval(function(){
    delete date
    date=new Date()
    hours=date.getHours()
    minutes=date.getMinutes()
    seconds=date.getSeconds()
    rotateOfHands()
},1000)*/






function rotateOfHands(){
    degOfSeconds=(seconds*6)
    degOfMinutes=(minutes*6)+(seconds*0.1)
    if(hours>=12)
        hours=hours-12
    degOfHours=(hours*30)+(minutes/2)+(seconds/120)
    secondsElemnt.style.transform='translate(-50%,-50%) rotate('+(degOfSeconds)+'deg)'
    minutesElement.style.transform='translate(-50%,-50%) rotate('+(degOfMinutes)+'deg)'
    hoursElement.style.transform='translate(-50%,-50%) rotate('+(degOfHours) +'deg)'
}