import Player from "./player.js" ;
import BulletController from "./bulletController.js" ;
import Object from "./objects.js" ;
import Coin from "./coins.js" ;

const deadLine = document.querySelector("#game-screen") ;
const dimenssions = deadLine.getContext('2d') ;

deadLine.width = 670 ;
deadLine.height = 600 ;

const bulletController = new BulletController(deadLine) ;
let player1 = new Player(200 , 300 , bulletController) ;
const object1 = new Object(500 , 290 , 40 , 80 , 5) ;
const coin1 = new Coin({
    x: Math.floor(Math.random() * 250) + 1 ,
    y: Math.floor(Math.random() * 300) + 1
})

const enemies = [
    object1
]

function gameLoop() {
    setStyles() ;
    dimenssions.fillStyle = "black" ;
    dimenssions.fillRect(0 , 0 , deadLine.width , deadLine.height) ;
    player1.draw(dimenssions) ;
    coin1.draw(dimenssions)
    bulletController.draw(dimenssions) ;
    enemies.forEach((enemy) => {
        if (bulletController.collideWith(enemy)) {
            if (enemy.health <= 0) {
                const ind = enemies.indexOf(enemy) ;
                enemies.splice(ind , 1) ;
            }
        } else {
            enemy.draw(dimenssions) ;
        }
    }) ;
}

function setStyles() {
    dimenssions.shadowColor = "yellow" ;
    dimenssions.shadowBlur = 10 ;
    dimenssions.lineWidth = 15 ;
}

setInterval(gameLoop , 1000 / 60)