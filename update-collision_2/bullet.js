export default class Bullet {
    constructor(x , y , speed , damage) {
        this.x = x ;
        this.y = y ;
        this.speed = speed ;
        this.damage = damage ;

        this.width = 10 ;
        this.height = 15 ;
        this.color = "red" ;
    }

    draw(dimenssions) {
        dimenssions.fillStyle = this.color ;
        this.x += this.speed ;
        dimenssions.fillRect(this.x , this.y , this.width , this.height) ;
    }
}