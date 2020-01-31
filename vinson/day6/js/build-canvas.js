const canvas = buildCanvas();
const img = buildImg();
const context = canvas.getContext('2d');

function buildCanvas() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = 440;
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
    w: 440,
    h: 640,
};

function draw() {
    context.drawImage(
        img, // the image to draw
        s.x, s.y, s.w, s.h, // source dimensions
        d.x, d.y, d.w, d.h,
    )
}
draw();
