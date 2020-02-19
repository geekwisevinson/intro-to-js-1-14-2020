const canvas = buildCanvas();
const img = buildImg();
const context = canvas.getContext('2d');
const spaceshipImage = buildSpaceship();
const asteroidImage = buildAsteroid();
const laserImage = buildLaser();
const asteroids = [];
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
    x: 100,
    y: 300,
    w: 100,
    h: 90,
};

const laser = {
    x: 0,
    y: 0,
    h: 100,
    w: 90,
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
    background.y += 10;
    if (background.y > canvas.height - 10) {
        background.y = -canvas.height + 10;
    }
}

function updateBackground2() {
    background2.y += 10;
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

function shootLaser () {
    context.drawImage(
        laserImage, // the image to draw
        laser.x, laser.y, laser.w, laser.h, // source dimensions
        0, 0, laser.w, laser.h,
    )
}

function drawSpaceship() {
    context.drawImage(
        spaceshipImage, // the image to draw
        0, 0, spaceship.w, spaceship.h, // source dimensions
        spaceship.x, spaceship.y, spaceship.w, spaceship.h,
    )
}

function drawAsteroid() { 
    asteroids.forEach(asteroid => {
        context.drawImage(
            asteroidImage, // the image to draw
            0, 0, 30, 30, // source dimensions
            asteroid.x, asteroid.y, asteroid.w, asteroid.h,
        )  
    })      
}

function buildAsteroid() {
    const asteroid = document.createElement('img');
    asteroid.src = 'game-assets/asteroid.png';
    document.body.appendChild(asteroid);
    return asteroid;
}

function buildLaser() {
    const laser = document.createElement('img');
    laser.src = 'game-assets/red-laser.png';
    document.body.appendChild(laser);
    return laser;
}

function updateAsteroid() {
    asteroids.forEach((asteroid, index) => {
        asteroid.y += .8;
        if(asteroid.y > canvas.height) {
            asteroid.y = -35;
            asteroids.splice(index, 1)
        }
    })
}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    updateAsteroid();
    updateBackground();
    updateBackground2();

    drawBackground();
    drawBackground2();
    drawSpaceship();
    drawAsteroid();
    window.requestAnimationFrame(gameLoop);
}

setInterval(function () {
    const x = Math.floor(Math.random() * canvas.width - 35);
    asteroids.push({
        fall: 0,
        x: x,
        y: -30,
        w: 30,
        h: 30,
    });
}, 2000)

document.addEventListener('keydown', function(e) {
    if(e.code === 'KeyA') {
        spaceship.x -= 20;
    }
})

document.addEventListener('keydown', function(e) {
    if(e.code === 'KeyD') {
        spaceship.x += 20;
    }
})

document.addEventListener('keydown', function(e) {
    if(e.code === 'KeyW') {
        spaceship.y -= 20;
    }
})

document.addEventListener('keydown', function(e) {
    if(e.code === 'KeyS') {
        spaceship.y += 20;
    }
})

document.addEventListener('keydown', function(e) {
    if(e.code === 'Space') {
        shootLaser();
    }
})

