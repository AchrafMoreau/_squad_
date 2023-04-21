class Player extends Sprite {
    constructor(positionX = 0, positionY = 0,block_list,imageSrc) {
        super({imageSrc:imageSrc})        
        this.position = { x: positionX, y: positionY }
        this.velocity = { x: 0, y: 1 }
        this.height = 25
        this.width = 25
        this.block_list = block_list
        

    }
    update() {
        ctx.fillStyle = "rgba(0,255,0,0.2)"
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
        this.draw()
        this.position.x += this.velocity.x
        this.checkForHorizontalCollision()
        this.applygravity()
        this.checkForVercticalCollision()

    }
    checkForHorizontalCollision(){
        for (let i = 0 ; i < this.block_list.length;i++){
            const collisionblok = this.block_list[i]
            if (collision(this,collisionblok)){
                if (this.velocity.x > 0){
                    this.velocity.x = 0
                    this.position.x = collisionblok.positionX - this.width - 0.01
                    break
                }
                if(this.velocity.x < 0){
                    this.velocity.x = 0
                    this.position.x = collisionblok.positionX + collisionblok.width + 0.01
                    break
                }
            }
        }
    }
    applygravity(){
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y < canvas.height) this.velocity.y += gravity
        else this.velocity.y = 0
        
    }
    checkForVercticalCollision(){
        for (let i = 0 ; i < this.block_list.length;i++){
            const collisionblok = this.block_list[i]
            if (collision(this,collisionblok)){
                if (this.velocity.y > 0){
                    this.velocity.y = 0
                    this.position.y = collisionblok.positionY - this.height - 0.01
                    break
                }
                if(this.velocity.y < 0){
                    this.velocity.y = 0
                    this.position.y = collisionblok.positionY + collisionblok.height + 0.01
                    break
                }
            }
        }
    }

}