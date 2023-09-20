let canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width=window.innerWidth
canvas.height=window.innerHeight
let partilceArray=[]
let hue = 0

class Particle{
    constructor(){
        this.x = Math.random()* canvas.width
        this.y = Math.random()* canvas.height
        this.size = Math.random()* 25 +1
        this.spX = Math.random() *3- 1.5
        this.spY = Math.random() *3 - 1.5
        this.color = 'hsl('+hue+',100%, 50%)'
    }
    update(){
        this.x+=this.spX
        this.y+=this.spY
        // if(this.size >0.2){
        //     this.size-=0.1
        // }
    }
    dG(){
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2)
        ctx.fillStyle = 'hsl('+hue+',100%, 50%)'
        ctx.fill()
    }
}

function init(){
    for(let i = 0; i< 50; i++){
        partilceArray.push(new Particle())
    }
}

init()

setInterval(() => {
    init()
    
}, 7000);


function handleParticles(){
    for(let i = 0; i < partilceArray.length;i++){
        partilceArray[i].update()
        partilceArray[i].dG()
    }
}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    handleParticles()
    hue++
    requestAnimationFrame(animate)
}

animate()