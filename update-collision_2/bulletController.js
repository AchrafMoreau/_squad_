import Bullet from "./bullet.js" ;

export default class BulletController {
    nextBulletTimer = 0 ;
    bullets = [] ;
    constructor(deadLine) {
        this.deadLine = deadLine ;
    }
    shoot () {

    }
    shoot(x , y , speed , damage , delay) {
        if (this.nextBulletTimer <= 0) {
            this.bullets.push(new Bullet(x , y , speed , damage))
            this.nextBulletTimer = delay ;
        }
        this.nextBulletTimer-- ;
    }
    draw(dimenssions) {
        this.bullets.forEach((bullet) => bullet.draw(dimenssions))
    }
    // isBulletOffScreen(bullet) {
    //     return bullet.y <= -bullet.height
    // }
}