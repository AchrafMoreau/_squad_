import Bullet from "./bullet.js" ;

export default class BulletController {
    nextBulletTimer = 0 ;
    bullets = [] ;
    constructor(deadLine) {
        this.deadLine = deadLine ;
    }
    shoot(x , y , speed , damage , delay) {
        if (this.nextBulletTimer <= 0) {
            this.bullets.push(new Bullet(x , y , speed , damage))
            this.nextBulletTimer = delay ;
        }
        this.nextBulletTimer-- ;
    }
    draw(dimenssions) {
        this.bullets.forEach((bullet) => {
            bullet.draw(dimenssions)
        })
    }
    collideWith(sprite) {
        return this.bullets.some((bullet) => {
            if (bullet.collideWith(sprite)) {
                this.bullets.splice(this.bullets.indexOf(bullet) , 1) ;
                return true ;
            }
            return false ;
        })
    }
    // isBulletOffScreen(bullet) {
    //     return bullet.y <= -bullet.height
    // }
}