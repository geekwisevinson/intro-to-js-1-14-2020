const canvas = buildCanvas();
const img = buildImg();
const context = canvas.getContext('2d');
const bird = {
    w: 80,
    h: 70,
    x: 40,
    y: 100,
    lift: 10,
    motion: 5,
};

const background = {
    x: 0,
    y: 0,
    w: 360,
    h: 640,
};
const background2 = {
    x: canvas.width,
    y: 0,
    w: 360,
    h: 640,
};

function buildCanvas() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = 360;
    canvas.height = 640;
    return canvas;
}

function buildImg() {
    const img = document.createElement('img');
    img.src = 'img/sprite.png';
    document.body.appendChild(img);
    return img;
}

const s = { // source
    x: 0,
    y: 0,
    w: 360,
    h: 640,
};
const d = { //destination
    x: 0,
    y: 0,
    w: 360,
    h: 640,
};

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

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    updateBackground();
    updateBackground2();
    updateBird();


    drawBackground();
    drawBackground2();
    drawBird();

    window.requestAnimationFrame(gameLoop);
}

function drawBird() {
    context.drawImage(
        img, // the image to draw
        360, 81 + ( getFallSpeed() > 0 ? 0 : 70 ), 80, 70, // source dimensions
        bird.x, bird.y, 80, 70,
    )
}

function updateBird() {
    bird.y += getFallSpeed();
    if (bird.y > canvas.height - bird.h) {
        bird.y = canvas.height - bird.h
    }
    if (bird.y < 1) {
        bird.y = 1
    }
}

function getFallSpeed() {
    bird.lift += - .1;
    return bird.motion + -bird.lift;
}

function updateBackground() {
    background.x -= 3;
    if (background.x < -canvas.width + 1) {
        background.x = canvas.width;
    }
}

function updateBackground2() {
    background2.x -= 3;
    if (background2.x < -canvas.width + 1) {
        background2.x = canvas.width;
    }
}

gameLoop();

document.addEventListener('keydown', function () {
    if (bird.lift < 5) {
        bird.lift = 10;
    }
});
