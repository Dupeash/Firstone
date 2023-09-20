let display=document.querySelector('.diplay')
let enterval=document.querySelector('.the-text')
let sendd=document.getElementById('.send')
let info=document.querySelector('.the-ssod')
let quotes=document.querySelector('.quotes')
let score=100
let result=0
let i=0
let timers=document.querySelector('.timers')
let clickCount=0
function add(){
    info.innerHTML='....'
    if(clickCount==0){
        i=0
       jjj= setInterval(() => {
            timers.innerHTML=`${i} second(s) has passed....`
            i++
            setTimeout(() => {
                score--
            }, 10000);
            
        }, 1000);
        
    }
    if(clickCount!=0) {
        timers.innerHTML='Click only Once !'
    }
   
   
    info.innerHTML='Doing addition'
    let randVal1 = Math.floor(Math.random()*1000 +1)
    let randVal2 = Math.floor(Math.random()*1000 +1)
    display.innerHTML=`${randVal1}+${randVal2}=?`
    result=randVal1+randVal2
    clickCount++
    return result
    

}




function sub(){
    info.innerHTML='....'
    if(clickCount==0){
        i=0
        jjj=setInterval(() => {
            timers.innerHTML=`${i} second(s) has passed....`
            i++
        }, 1000);
        
    }
    if(clickCount!=0) {
        timers.innerHTML='Click only Once !'
    }

    info.innerHTML='Doing Subtraction'
    let randVal1 = Math.floor(Math.random()*1000 +1)
    let randVal2 = Math.floor(Math.random()*1000 +1)
    display.innerHTML=`${randVal1}-${randVal2}=?`
    result=randVal1-randVal2
    return result

}




function mult(){
    info.innerHTML='....'
    if(clickCount==0){
        i=0
        jjj=setInterval(() => {
            timers.innerHTML=`${i} second(s) has passed....`
            i++
        }, 1000);
        
    }
    if(clickCount!=0) {
        timers.innerHTML='Click only Once !'
    }

    info.innerHTML='Doing Multiply...'
    let randVal1 = Math.floor(Math.random()*99 +1)
    let randVal2 = Math.floor(Math.random()*9 +1)
    display.innerHTML=`${randVal1} * ${randVal2}=?`
    result=randVal1 * randVal2
    return result

}




function divs(){
    info.innerHTML='....'
    if(clickCount==0){
        i=0
       jjj= setInterval(() => {
            timers.innerHTML=`${i} second(s) has passed....`
            i++
        }, 1000);
        
    }
    if(clickCount!=0) {
        timers.innerHTML='Click only Once !'
    }

    i=0
    setInterval(() => {
        timers.innerHTML=`${i} second(s) has passed`
        i++
    }, 1000);

    info.innerHTML='Doing Division...'
    let randVal1 = Math.floor(Math.random()*980 +1)
    let randVal2 = Math.floor(Math.random()*98 +1)
    display.innerHTML=`${randVal1}/${randVal2}=?`
    result=randVal1/randVal2
    return result
    

}



function gam(){
    info.innerHTML='....'
    console.log(result)
    console.log('clicked')
    let myVal=enterval.value
    myVal=Number.parseInt(myVal)

    clearInterval(jjj)
    if(myVal==result){
        info.innerHTML=`yes ! correct the answer is ${result}`
        if(score==0 || score<0){
            quotes.innerHTML='Score is bad :(' 
        }
        else{
            quotes.innerHTML='Score is '+score

        }
        
    }
    else{
        info.innerHTML=`not the correct answer`
    }
  

   
}