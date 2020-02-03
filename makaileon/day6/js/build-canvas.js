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

const pipe = {
    w: 80,
    h: 200,
    x: 200,
    y: 0,
    gap: 200
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
    updatePipe();
    hitDetection();


    drawBackground();
    drawBackground2();
    drawBird();
    drawPipe();

    window.requestAnimationFrame(gameLoop);
}

function drawBird() {
    context.drawImage(
        img, // the image to draw
        360, 81 + ( getFallSpeed() > 0 ? 0 : 70 ), 80, 70, // source dimensions
        bird.x, bird.y, 80, 70,
    )
}
function drawPipe() {
    context.drawImage(
        img, // the image to draw
        360, 0, 80, 80, // source dimensions
        pipe.x, pipe.y, pipe.w, pipe.h,
    );
    context.drawImage(
        img, // the image to draw
        360, 0, 80, 80, // source dimensions
        pipe.x, pipe.h + pipe.gap, pipe.w, pipe.h + 400,
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
    return bird.y, bird.h
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

function updatePipe() {
    pipe.x -= 3;
    if (pipe.x < -canvas.width + 1) {
        pipe.x = canvas.width;
        pipe.h = Math.floor(Math.random() * 240) + 150
    }
    return pipe.x, pipe.h
}

function hitDetection (updateBird, updatePipe) {
    if (40 < pipe.x + pipe.w &&
        40 + bird.w > pipe.x &&
        bird.y < pipe.y + pipe.h &&
        bird.y + bird.h > pipe.y) {
         console.log("collision");
     }
}
gameLoop();

document.addEventListener('keydown', function () {
    if (bird.lift < 7) {
        bird.lift = 11;
    }
});
