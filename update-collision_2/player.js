export default class Player {
    constructor(x , y , bulletController) {
        this.x = x ;
        this.y = y ;
        this.bulletController = bulletController ;
        this.width = 20 ;
        this.height = 60 ;
        this.speed = 4 ;

        window.addEventListener('keydown' , this.keydown) ;
        window.addEventListener('keyup' , this.keyup ) ;
    }
    draw(dimenssions) {
        this.move() ;
        dimenssions.strokeStyle = "yellow" ;
        dimenssions.strokeRect(this.x , this.y , this.width , this.height) ;
        dimenssions.fillStyle = "black" ;
        dimenssions.fillRect(this.x , this.y , this.width , this.height) ;
        this.shoot() ;
    }
    shoot() {
        if (this.shootPressed) {
            console.log("shoot")
            const speed = 5 ;
            const delay = 7 ;
            const bulletY = this.y + this.height/2 ;
            const bulletX = this.x ;
            const damage = 1 ;
            this.bulletController.shoot(bulletX , bulletY , speed , damage , delay) ;
        }
    }
    move() {
        if (this.rightPressed) {
            this.x += this.speed ;
        }
        if (this.leftPressed) {
            this.x -= this.speed ;
        }
    }

    keydown = (e) => {
        if (e.code === 'ArrowRight') {
            this.rightPressed = true ;
        }
        if (e.code === 'ArrowLeft') {
            this.leftPressed = true ;
        }
        if (e.code === 'ArrowUp') {
            this.upPressed = true ;
        }
        if (e.code === 'ArrowDown') {
            this.downPressed = true ;
        }
        if (e.code === 'Enter') {
            this.shootPressed = true ;
        }
            // case ' ' :
            //     this.rightPressed = true ;
            //     break
            // case 'Enter' :
            //     player1.shootPressed = true ;
            //     break
    }

    keyup = (e) => {
        switch(e.code) {
            case 'ArrowRight' :
                this.rightPressed = false ;
                break
            case 'ArrowLeft' :
                this.leftPressed = false ;
                break
            case 'Enter' :
                this.shootPressed = false ;
                break
        }
    }
}

