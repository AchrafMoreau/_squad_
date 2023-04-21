class collisionBlok {
    constructor(positionX,positionY){
        this.positionX = positionX
        this.positionY = positionY
        this.width = 16
        this.height = 16

    }
    draw(){
        ctx.fillStyle = "rgba(255, 0, 0, 0)"
        ctx.fillRect(this.positionX,this.positionY,this.width,this.height)
    }
    update (){
        this.draw()
    }
}