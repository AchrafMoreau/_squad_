const canvas = document.getElementById('canvas');

canvas.width = 500
canvas.height = 500

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.height = 60;
ctx.width = 20;
let position = {
    x : 100 ,
    y : canvas.height - ctx.height - 10
}
let move = 4
function draw (){
    window.requestAnimationFrame(draw)
    canvas.style.background = 'blue'
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillRect(position.x , position.y , ctx.width, ctx.height);
}
addEventListener("keydown" , Event =>  {
    if (Event.code == "ArrowLeft") {
        console.log("hhhahahhahahah")
        position.x -= move
    }else if (Event.code == "ArrowRight"){
        position.x += move
        
    }else if (Event.code == "Space"){
        position.y -= 80
         
    }
    // ctx.fillRect(position.x , position.y , ctx.width, ctx.height);
})

addEventListener("keyup",Event => {
    if (Event.code == "Space"){
        position.y += 80
    }

    // ctx.fillRect(position.x , position.y , ctx.width, ctx.height);
})
draw()

