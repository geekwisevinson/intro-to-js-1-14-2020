class Drawable {
    canvas = null;
    context = null;
    img = null;

    x = 0;
    y = 0;
    w = 0;
    h = 0;

    source = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
    };

    constructor(config) {
        Object.keys(config).forEach( (key) => {
            this[key] = config[key];
        });
    }
    draw() {
        this.context.drawImage(
            this.img, // the image to draw
            this.source.x, this.source.y, this.source.w, this.source.h, // source dimensions
            this.x, this.y, this.w, this.h,
        )
    }
    drawFlipX() {
        this.context.scale(-1,1);
        this.context.drawImage(
            this.img, // the image to draw
            this.source.x, this.source.y, this.source.w, this.source.h, // source dimensions
            (-this.x + -this.w), this.y, this.w, this.h,
        )
    }
}
