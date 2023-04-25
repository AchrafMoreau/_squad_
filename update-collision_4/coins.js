export default class Coin {
    constructor(position) {
        this.position = position 
        this.width = 15 ;
        this.height = 15 ;
        this.color = "gold" ;
    }

    draw(ctx) {
        ctx.fillStyle = this.color ;
        ctx.fillRect(this.position.x , this.position.y , this.width , this.height) ;
    }
}