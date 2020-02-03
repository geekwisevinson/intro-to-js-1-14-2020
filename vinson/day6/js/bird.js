class Bird extends Drawable {
    lift = 10;
    motion = 5;

    update() {
        console.log(this.lift, bird.lift);
        this.y += this.getFallSpeed();
        if (this.y > canvas.height - this.h) {
            this.y = canvas.height - this.h
        }
        if (this.y < 1) {
            this.y = 1
        }
    }
    getFallSpeed() {
        this.lift += - .1;
        const result = this.motion + -this.lift;
        console.log('result class', result);
        return result;
    }
}
