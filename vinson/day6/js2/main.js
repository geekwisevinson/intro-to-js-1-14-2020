const canvas = buildCanvas();
const img = buildImg('img/sprite.png');
const gif = buildImg('img/bunny.gif');
const context = canvas.getContext('2d');

const spaceGuyImg0 = buildImg('img/0.gif');
const spaceGuyImg1 = buildImg('img/1.gif');
const spaceGuyImg2 = buildImg('img/2.gif');
const spaceGuyImg3 = buildImg('img/3.gif');
const spaceGuyImg4 = buildImg('img/4.gif');
const myBird = new Bird({
    canvas,
    context,
    img,
    x: 100,
    y: 50,
    w: 80,
    h: 70,
    xSpeed: 0,
    ySpeed: 0,
    source: sources.bird.fall,
    z: 1,
});

const myBunny = new Bird({
    canvas,
    context,
    img: gif,
    x: 120,
    y: 50,
    w: 80,
    h: 70,
    z: 2,
    xSpeed: 0,
    ySpeed: 0,
    source: sources.bunny.default,
});

const spaceGuy = new Bird({
    canvas,
    context,
    img: gif,
    imgArr: [spaceGuyImg0, spaceGuyImg1, spaceGuyImg2, spaceGuyImg3, spaceGuyImg4],
    x: 120,
    y: 50,
    w: 80,
    h: 70,
    z: 3,
    xSpeed: 0,
    ySpeed: 0,
    source: sources.spaceGuy.default,
});

[myBird, myBunny, spaceGuy].forEach( obj => {
    document.addEventListener('keydown', function (event) {
        obj.press(event.code);
    });
    document.addEventListener('keyup', function (event) {
        obj.release(event.code);
    });
});



const zObjects = [spaceGuy];
function gameLoop() {
    context.clearRect(0, 0, 360, 640);
    zObjects.sort(function (a,b) {
        return a.z > b.z ? 1 : -1;
    });
    zObjects.forEach( (item) => {
        console.log(item);
        item.update();
        item.draw();
    });


    window.requestAnimationFrame(gameLoop);
}

gameLoop();
