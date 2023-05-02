import Player from "./player.js" ;
import BulletController from "./bulletController.js" ;

const deadLine = document.querySelector("#game-screen") ;
const dimenssions = deadLine.getContext('2d') ;

deadLine.width = 670 ;
deadLine.height = 600 ;

const bulletController = new BulletController(deadLine) ;
let player1 = new Player(200 , 300 , bulletController) ;

function gameLoop() {
    setStyles() ;
    dimenssions.fillStyle = "black" ;
    dimenssions.fillRect(0 , 0 , deadLine.width , deadLine.height) ;
    player1.draw(dimenssions) ;
    bulletController.draw(dimenssions) ;
}

function setStyles() {
    dimenssions.shadowColor = "yellow" ;
    dimenssions.shadowBlur = 10 ;
    dimenssions.lineWidth = 15 ;
}

setInterval(gameLoop , 1000 / 60)