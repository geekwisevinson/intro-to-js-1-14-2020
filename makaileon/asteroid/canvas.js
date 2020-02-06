const canvas = buildCanvas();
const img = buildImg();
const context = canvas.getContext('2d');
const background = {
    x: 0,
    y: 400,
    w: 400,
    h: 400,
};
const background2 = {
    x: 0,
    y: 0,
    w: 400,
    h: 400,
};
const s = { // source
    x: 0,
    y: 0,
    w: 400,
    h: 400,
};
const spaceship = {
    x: 0,
    y: 0,
    w: 100,
    h: 90,
};

function buildImg() {
    const img = document.createElement('img');
    img.src = 'game-assets/background-purple.png';
    document.body.appendChild(img);
    return img;
}
function buildCanvas() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = 400;
    canvas.height = 400;
    return canvas;
}
function updateBackground() {
    background.y += 8;
    if (background.y > canvas.height - 10) {
        background.y = -canvas.height + 10;
    }
}
function updateBackground2() {
    background2.y += 8;
    if (background2.y > canvas.height - 10) {
        background2.y = -canvas.height + 10;
    }
}
function drawBackground() {
    context.drawImage(
        img, // the image to draw
        s.x, s.y, s.w, s.h, // source dimensions
        background.x, background.y, background.w, background.h,
    )
}
function drawBackground2() {
    context.drawImage(
        img, // the image to draw
        s.x, s.y, s.w, s.h, // source dimensions
        background2.x, background2.y, background2.w, background2.h,
    )
}
function buildSpaceship() {
    const spaceship = document.createElement('img');
    spaceship.src = 'game-assets/red-ship.png';
    document.body.appendChild(spaceship);
    return spaceship;
}
function drawSpaceship() {
    context.drawImage(
        spaceshipImage, // the image to draw
        spaceship.x, spaceship.y, spaceship.w, spaceship.h, // source dimensions
        spaceship.x, spaceship.y, spaceship.w, spaceship.h,
    )
}
const spaceshipImage = buildSpaceship();
function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawBackground2();
    updateBackground();
    updateBackground2();
    drawSpaceship();
    window.requestAnimationFrame(gameLoop);
}

console.log(spaceship)