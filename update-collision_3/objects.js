export default class Object {
    constructor(x , y , width , height , health) {
        this.x = x ;
        this.y = y ;
        this.width = width ;
        this.height = height ;
        this.health = health ;
        this.color = "cyan" ;
    }

    draw(dimenssions) {
        dimenssions.fillStyle = this.color ;
        dimenssions.fillRect(this.x , this.y , this.width , this.height) ;
    }

    takeDamage(damage) {
        this.health -= damage ;
    }
}