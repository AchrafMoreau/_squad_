

const canvas = document.getElementById('canvas');
canvas.width = 545
canvas.height = 590

const ctx = canvas.getContext('2d');
const steps = canvas.getContext('2d');




ctx.fillRect(0,0, canvas.width, canvas.height)





const gravity = 0.2

// class for player
class Test{
    constructor({position, velocity, height, width, collbloks, platformCollboks}){
        this.position = position
        this.veloctiy = velocity
        this.height = height
        this.width = width
        this.collbloks = collbloks
        this.platformCollboks = platformCollboks
    }

    draw(color){
        ctx.fillStyle = color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(color){
        this.draw(color)
        this.position.y += this.veloctiy.y
        this.veloctiy.y += gravity
        this.position.x += this.veloctiy.x
        
        this.checkForVerticalIntraction()
        this.checkForHorizontalIntraction()
    }
    checkForVerticalIntraction(){
        for(let i = 0; i<this.collbloks.length; i++){
            const collisionBlock = this.collbloks[i]
            if(
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.height + collisionBlock.position.y &&
                this.position.x <= collisionBlock.width + collisionBlock.position.x &&
                this.position.x + this.height >= collisionBlock.position.x 
            ){
                if(this.veloctiy.y > 0){
                    this.veloctiy.y = 0
                    this.position.y = collisionBlock.position.y - this.height - 0.01
                    break
                }
                if(this.veloctiy.y < 0){
                    this.veloctiy.y = 0
                    this.veloctiy.y = collisionBlock.position.y + this.height + 0.01
                    break
                }
                
            }
        }
        for(let i = 0; i<this.platformCollboks.length; i++){
            const collisionBlock = this.platformCollboks[i]
            if(
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y + this.height <=
                  collisionBlock.position.y + collisionBlock.height &&
                this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.width >= collisionBlock.position.x
            ){
                
                if(this.veloctiy.y > 0){
                    this.veloctiy.y = 0
                    this.position.y = collisionBlock.position.y - this.height - 0.01
                    break
                }
                
            }
        }
    }
    checkForHorizontalIntraction(){
        for(let i = 0; i<this.collbloks.length; i++){
            const collisionBlock = this.collbloks[i]
            if(
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height &&
                this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.x + this.width >= collisionBlock.position.x
            ){
                
                if(this.veloctiy.x > 0){
                    this.veloctiy.x = 0
                    this.position.x = collisionBlock.position.x - this.width - 0.01
                    break
                }
                if(this.veloctiy.x < 0){
                    this.veloctiy.x = 0
                    this.veloctiy.x = collisionBlock.position.x + this.width + 0.01
                    break
                }
            }
        }
        // for(let i = 0; i<this.platformCollboks.length; i++){
        //     const platformColl = this.platformCollboks[i]
        //     if(
        //         this.position.y + this.height >= platformColl.position.y &&
        //         this.position.y + this.height <=
        //           platformColl.position.y + platformColl.height &&
        //         this.position.x <= platformColl.position.x + platformColl.width &&
        //         this.position.x + this.width >= platformColl.position.x
        //     ){
                
        //         if(this.veloctiy.x > 0){
        //             this.veloctiy.x = 0
        //             this.position.x = collisionBlock.position.x - this.width - 0.01
        //             break
        //         }
        //         if(this.veloctiy.x < 0){
        //             this.veloctiy.x = 0
        //             this.veloctiy.x = collisionBlock.position.x + this.width + 0.01
        //             break
        //         }
        //     }
        // }
    }
}
// class for foolrcollision 
class floorCollisions{
    constructor({position, speed=0}){
        this.position = position
        this.height = 16
        this.width = 32
        this.speed = speed
    }
    draw(){
        ctx.fillStyle = 'rgba(0,0,255,0.3)'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update(){
        this.draw()
        this.position.y += this.speed


    }
}



const floor2D = []
for(let i =0 ; i<floor.length; i+= 36){
    floor2D.push(floor.slice(i, i+36))
}
const s2d = []
for(let i =0 ; i<ourStepes.length; i+= 16){
    s2d.push(ourStepes.slice(i, i+16))
}

let collisions = []
floor2D.forEach((elm, Y)=>{
    elm.forEach((symbol, X) =>{
        if(symbol == 202){
            collisions.push(new floorCollisions({
                position:{
                    x: X *32,
                    y:Y * 32,
                }
            }))
        }
    })
})
let mystps = []
s2d.forEach((elm, Y)=>{
    elm.forEach((symbol, X) =>{
        if(symbol == 7 || symbol == 8 || symbol == 9){
            mystps.push(new floorCollisions({
                position:{
                    x: X *32,
                    y:-Y * 32,
                },
                speed: 0.4
            }))
        }
    })
})

// object of the class player
const player = new Test({
    position:{
        x:10,
        y:0
    },
    velocity:{
        x:0,
        y:8
    },
    height:50,
    width: 20,
    collbloks: collisions,
    platformCollboks: mystps
})
    



// event listener for keydown
window.addEventListener('keydown', (e)=>{
    switch (e.key){
        case 'ArrowRight':
            player.veloctiy.x = 2
            break
        case "ArrowLeft":
            player.veloctiy.x = -2
            break
        case " ":
            player.veloctiy.y = -5

    }
})


// event listener for keyup
window.addEventListener('keyup', (e)=>{
    switch (e.key){
        case 'ArrowRight':
            player.veloctiy.x = 0
            break
        case "ArrowLeft":
            player.veloctiy.x = 0
            break
    }
})


// the loop that keep the game goning 
function loop(){
    window.requestAnimationFrame(loop)
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.update('red');
    
    collisions.forEach(elm=>{
        elm.draw()
    })
    mystps.forEach(elm=>{
        elm.update()
        
    })
    
}
loop()