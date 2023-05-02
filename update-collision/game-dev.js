const deadLine = document.querySelector("#game-screen") ;
const dimenssions = deadLine.getContext('2d') ;

deadLine.width = 670 ;
deadLine.height = 600 ;

const GRAVITY = 1.5 ;
const direc = {
    aR: {
        x: 4 ,
        y: 0
    } ,
    aL: {
        x: -4 ,
        y: 0
    } ,
    aU : {
        x: 0 ,
        y: -4
    } ,
    aD: {
        x: 0 ,
        y: 1
    } ,
    sP: {
        x: 0 ,
        y: -25
    }
}

class PointPlace {
    constructor(position) {
        this.position = position ;
        this.velocity = {
            x: 0 ,
            y: 1
        }
        this.width = 150 ;
        this.height = 20 ;
    }
    draw() {
        dimenssions.fillStyle = 'green' ;
        // dimenssions.fillRect(20 , y , 150 , 150) ;
        dimenssions.fillRect(this.position.x , this.position.y , this.width , this.height) ;
    }
    update() {
        this.position.y += this.velocity.y ;
        if (this.position.y + this.height + this.velocity.y < deadLine.height / 1.7) {
            this.velocity.y += GRAVITY ;
        } else {
            this.velocity.y = 0 ;
        }
    }
}


class Player {
    constructor(position) {
        this.position = position ;
        this.width = 20 ;
        this.height = 140 ;
        this.velocityP = {
            x: 0 ,
            y: 1 
        }
    }
    draw() {
        dimenssions.fillStyle = "black" ;
        // if (collides(player1 , place2)) {
        //     dimenssions.fillStyle = "red" ;
        // }
        dimenssions.fillRect(this.position.x , this.position.y , this.width , this.height) ;
    }
    update() {
        this.position.x += this.velocityP.x ;
        this.position.y += this.velocityP.y ;
        if (this.position.y + this.height + this.velocityP.y < deadLine.height) {
            this.velocityP.y += GRAVITY ;
        } else {
            this.velocityP.y = 0 ;
        }
    }
}

let player1 = new Player({
    x: 20 ,
    y: -10
}) ;

let place1 = new PointPlace({
    x: 500 ,// Math.floor(Math.random() * 495) + 1
    y: -10
}) ;

let place2 = new PointPlace({
    x: 200 ,// Math.floor(Math.random() * 495) + 1
    y: -10
}) ;

const PLACES = [place1 , place2] ;

function collides(a , b) {
    return a.position.x < b.position.x + b.width &&
            a.position.x + a.width > b.position.x &&
            a.position.y < b.position.y + b.height &&
            a.position.y + a.height > b.position.y
}

function animate() {

    window.requestAnimationFrame(animate) ;

    dimenssions.fillStyle = 'white' ;
    dimenssions.fillRect(0 , 0 , deadLine.width , deadLine.height) ;

    player1.draw() ;
    player1.update() ;

    place1.draw() ;
    place1.update() ;

    place2.draw() ;
    place2.update() ;

    if (collides(player1 , place2)) {

        if (player1.velocityP.y > 0) {
            player1.velocityP.y = 0 ;
        }
        player1.position.y = place2.position.y - player1.height ;
        // player1.velocityP.y = 0 ;
        // player1.velocityP.x = 0 ;
    }
    if (collides(player1 , place1)) {

        if (player1.velocityP.y > 0) {
            player1.velocityP.y = 0 ;
        }
        player1.position.y = place1.position.y - player1.height ;
        // player1.velocityP.y = 0 ;
        // player1.velocityP.x = 0 ;
    }
    window.addEventListener('keydown' , e => { console.log(e.key)
        switch(e.key) {
            case 'ArrowRight' :
                player1.velocityP.x = direc.aR.x ;
                console.log("you pressed")
                break
            case 'ArrowLeft' :
                player1.velocityP.x = direc.aL.x ;
                break
            case 'ArrowUp' :
                player1.velocityP.y = direc.aU.y ;
                break
            case 'ArrowDown' :
                player1.velocityP.y = direc.aD.y ;
                break
            case ' ' :
                player1.velocityP.y = direc.sP.y ;
        }
    }) ;
    
    window.addEventListener('keyup' , e => { console.log(e.key)
        switch(e.key) {
            case 'ArrowRight' :
                player1.velocityP.x = 0 ;
                console.log("you pressed")
                break
            case 'ArrowLeft' :
                player1.velocityP.x = 0 ;
                break
        }
    }) ;
}

animate() ;
