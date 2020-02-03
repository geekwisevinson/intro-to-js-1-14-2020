const canvas = buildCanvas();
const img = buildImg();
const context = canvas.getContext('2d');

const myBird = new Bird({
    context,
    img,
    x: 200,
    y: 50,
    w: 80,
    h: 70,
    xSpeed: 0,
    ySpeed: 0,
    source: sources.bird.fall,
});

document.addEventListener('keydown', function (event) {
    myBird.press(event.code);
});
document.addEventListener('keyup', function (event) {
    myBird.release(event.code);
});
function gameLoop() {
    context.clearRect(0, 0, 360, 640)
    myBird.update();
    myBird.draw();
    window.requestAnimationFrame(gameLoop);
}

gameLoop();
