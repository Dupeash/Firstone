let player1hp=document.querySelector('.hp1')
let player2hp=document.querySelector('.hp2')
let hp1=player1hp.innerText
hp1=Number.parseInt(hp1)
let hp2=player2hp.innerText
hp2=Number.parseInt(hp2)
let whitScreen=document.querySelector('.white')
let main=document.querySelector('.main')




function firstpFirstAttack(){
    let attackVal=10;
    hp2-=attackVal;
    if(hp2<0){
        hp2=0
        if(hp2==0){
            open('p1.html',target='self')
            // main.classList.add('black')
        }
        whitScreen.innerHTML='The winner is Player 1'
    }
    console.log(player1hp.value)
    player2hp.innerHTML=hp2

}

function firstpSecondAttack(){
    let attackVal=5;
    hp2-=attackVal;
    if(hp2<0){
        if(hp2==0){
            open('p1.html',target='self')
            // main.classList.add('black')
        }
    }
    console.log(player1hp.value)
    player2hp.innerHTML=hp2

}

function firstpThirdAttack(){
    let attackVal=3;
    hp2-=attackVal;
    if(hp2<0){
        hp2=0
        if(hp2==0){
            open('p1.html',target='self')
            // main.classList.add('black')
        }
    }
 
    player2hp.innerHTML=hp2

}


function firstpLeave(){
 hp2=hp2
}

// this is second player code
function secondpFirstAttack(){
    let attackVal=10;
    hp1-=attackVal;
    if(hp1<0){
        hp1=0
        if(hp1==0){
            open('p2.html',target='self')
            // main.classList.add('black')
        }
        whitScreen.innerHTML='The winner is Player 1'
    }
    
    player1hp.innerHTML=hp1

}

function secondpSecondAttack(){
    let attackVal=5;
    hp1-=attackVal;
    if(hp1<0){
        hp1=0
        if(hp1==0){
             open('p2.html',target='self')
            // main.classList.add('black')
        }
        whitScreen.innerHTML='The winner is Player 1'
    }
    
    player1hp.innerHTML=hp1
}

function secondpThirdAttack(){
    let attackVal=3;
    hp1-=attackVal;
    if(hp1<0){
        hp1=0
        if(hp1==0){
             open('p2.html',target='self')
         
        }
        whitScreen.innerHTML='The winner is Player 1'
    }
    
    player1hp.innerHTML=hp1

}


function secondpLeave(){
 hp1=hp1
}




