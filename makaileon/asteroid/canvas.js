const canvas = buildCanvas();
const img = buildImg();
const context = canvas.getContext('2d');
const spaceshipImage = buildSpaceship();
const asteroidImage = buildAsteroid();
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
    speed: 0,
    x: 0,
    y: 0,
    w: 100,
    h: 90,
};
const asteroid = {
    fall: 0,
    x: 0,
    y: 0,
    w: 30,
    h: 30,
}

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
    spaceship.src = 'game-assets/blue-ship.png';
    document.body.appendChild(spaceship);
    return spaceship;
}
function drawSpaceship() {
    context.drawImage(
        spaceshipImage, // the image to draw
        spaceship.x, spaceship.y, spaceship.w, spaceship.h, // source dimensions
        140, 300, spaceship.w, spaceship.h,
    )
}
function drawAsteroid() {
        context.drawImage(
            asteroidImage, // the image to draw
            asteroid.x, asteroid.y, asteroid.w, asteroid.h, // source dimensions
            100, asteroidFallSpeed(), asteroid.w, asteroid.h,
        )        
}
function buildAsteroid() {
    const asteroid = document.createElement('img');
    asteroid.src = 'game-assets/asteroid.png';
    document.body.appendChild(asteroid);
    return asteroid;
}
function asteroidFallSpeed () {
    asteroid.y += -.8;
    return asteroid.fall;
}
function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawBackground2();
    updateBackground();
    updateBackground2();
    drawSpaceship();
    drawAsteroid();
    window.requestAnimationFrame(gameLoop);
}

console.log(spaceship)