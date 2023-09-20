let canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width=window.innerWidth
canvas.height=window.innerHeight
let partilceArray=[]
let hue = 0

const mouse ={
    x:undefined,
    y: undefined,
}

canvas.addEventListener('click', function(e){
    mouse.x = e.x
    mouse.y = e.y
    for(let i = 0;i <8;i++){
        partilceArray.push(new Particle())
    }
})

canvas.addEventListener('mousemove', function(e){
    mouse.x = e.x
    mouse.y = e.y
    for(let i = 0;i <8;i++){
        partilceArray.push(new Particle())
    }
})



class Particle{
    constructor(){
        this.x = mouse.x
        this.y = mouse.y
      //  this.x = Math.random()* canvas.width
        //this.y = Math.random()* canvas.height
        this.size = Math.random()* 15 +1
        this.spX = Math.random() *3 - 1.5
        this.spY = Math.random() *3 - 1.5
        this.color = 'hsl('+hue+',100%, 50%)'
    }
    update(){
        this.x+=this.spX
        this.y+=this.spY
        if(this.size >0.2){
            this.size-=0.1
        }
    }
    dG(){
        
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}

function init(){
    for(let i = 0; i< 100; i++){
        partilceArray.push(new Particle())
    }
}
init()

function handleParticles(){
    for(let i = 0; i < partilceArray.length;i++){
        partilceArray[i].update()
        partilceArray[i].dG()
        if(partilceArray[i].size <=0.3){
            partilceArray.splice(i,1)
            i--
        }
    }
}

function animate(){
   // ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle='rgba(0,0,0,0.02)'
    ctx.fillRect(0,0, canvas.width, canvas.height)
    handleParticles()
    hue++
    requestAnimationFrame(animate)
}

animate()