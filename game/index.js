const canvas = document.getElementById("canvasgame");
const ctx = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
const scaledCanvas = { width: canvas.width / 4, height: canvas.height / 4 }
const gravity = 0.5
const floorcolission2D = []
const Bloks_list = []
const platformCollisions2D = []
const platform_list = []

// Making an array with 2demension for display the block in our game in the bottom
for (let i = 0; i < floorcolission.length; i += 36) {
    floorcolission2D.push(floorcolission.slice(i, i + 36))
}
floorcolission2D.forEach((line,y) =>{
    line.forEach((symbol,x) => {
        if (symbol === 202){
            Bloks_list.push(new collisionBlok(x*16,y*16))
        }
    })
})

//  Making an array with 2dimension for display the block in our game in random place
//  That help the player to in our game and moving to the next level
for (let i = 0;i < platformCollisions.length;i += 36){
    platformCollisions2D.push(platformCollisions.slice(i,i+36))
}
platformCollisions2D.forEach((line,y) => {
    line.forEach((symbol,x) => {
        if (symbol === 202){
            platform_list.push(new collisionBlok(x*16,y*16))
        }
    })
})
const player = new Player(100,100,Bloks_list,"./img/warrior/Idle.png")
const sprite = new Sprite({position:{x:0,y:0},imageSrc:"./img/background.png"})

function animate() {
    window.requestAnimationFrame(animate)
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.scale(4, 4)
    ctx.translate(0, -sprite.image.height + scaledCanvas.height)
    sprite.update()
    Bloks_list.forEach(block =>{
        block.update()
    }
    )
    platform_list.forEach(line =>{
        line.update()
    })
    player.update()
    ctx.restore()
}
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight":
            player.velocity.x = 1
            break
        case "ArrowLeft":
            player.velocity.x = -1
            break;
        case " ":
            player.velocity.y = -8
            break
    }
})
window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "ArrowRight":
            player.velocity.x = 0
            break
        case "ArrowLeft":
            player.velocity.x = 0
            break
    }})

animate()

