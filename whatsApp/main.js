let changeButton = document.querySelector('.follow')
let count = 0
let openChat = document.getElementById("one")

changeButton.addEventListener('click',()=>{    
    count++
    if(count%2 == 0 ){
        console.log("Yesss"+count)
        changeButton.innerHTML = 'Follow'
    }
    else{
        console.log(count)
        changeButton.innerHTML = 'Following'

    }
}
)



let sendButton = document.querySelector('.send')
let theMessage=null;

sendButton.addEventListener('click', function(e){
    
let chatMessage = document.querySelector('.chat-boxm')
theMessage=chatMessage.value 
 
let answers=['hello', 'hai', 'How is the day?', 'How do you do?']
let random = Math.floor(Math.random()*answers.length)
console.log(random)
let rand = [random][answers]
console.log(rand)


let myText=document.querySelector('.thM')
myText.innerHTML=theMessage




})





