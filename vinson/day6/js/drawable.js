class Drawable {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    lift = 0;
    motion = 0;
    context =  null;
    source = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
    };
    constructor(config) {
        Object.keys(config).forEach((key) => {
            this[key] = config[key];
        });
    }
    draw() {
        this.context.drawImage(
            img, // the image to draw
            this.source.x, this.source.y, this.source.w, this.source.h, // source dimensions
            this.x, this.y, this.w, this.h,
        );
    }
}
