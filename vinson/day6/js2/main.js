const canvas = buildCanvas();
const img = buildImg('img/sprite.png');
const gif = buildImg('img/bunny.gif');
const context = canvas.getContext('2d');

const myBird = new Bird({
    canvas,
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

const myBunny = new Bird({
    canvas,
    context,
    img: gif,
    x: 200,
    y: 50,
    w: 80,
    h: 70,
    xSpeed: 0,
    ySpeed: 0,
    source: sources.bunny.default,
});

[myBird, myBunny].forEach( obj => {
    document.addEventListener('keydown', function (event) {
        obj.press(event.code);
    });
    document.addEventListener('keyup', function (event) {
        obj.release(event.code);
    });
});

function gameLoop() {
    context.clearRect(0, 0, 360, 640);

    // myBird.update();
    // myBird.draw();

    myBunny.update();
    myBunny.draw();
    window.requestAnimationFrame(gameLoop);
}

gameLoop();
