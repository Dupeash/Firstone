const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
console.log(ctx)
let particleArray=[]
let hue =0




const mouse ={
    x:undefined,
    y: undefined,
}

let c = 0

canvas.addEventListener('click', function(e){
    mouse.x= e.x
    mouse.y = e.y
    draw()
})

class Particle{
    constructor(){
        this.x = mouse.x
        this.y = mouse.y
        this.size = 50

    }
    draw(){
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,50, 0, Math.PI * 2)
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'Red'
    ctx.lineWidth = 4
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
    }
}

canvas.addEventListener('mouseover', function(e){
    mouse.x= e.x
    mouse.y = e.y
    for( let i = 0; i < 10 ; i++){
        particleArray.push(new Particle())
    }
    console.log('yess')
})


function handleParticles(){
    for(let i =0; i< particleArray.length;i++){
        particleArray[i].draw()
        
    }
}





function draw(){
    
}

//  function animate(){
//     ctx.fillRect(0, 0, canvas.width, canvas.height)
//    ctx.clearRect(0, 0, canvas.width, canvas.height)
//     requestAnimationFrame(animate)
//  }
// animate()


