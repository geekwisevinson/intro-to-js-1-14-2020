class Movable extends Drawable{
    xSpeed = 0; // final x speed;
    ySpeed = 0; // final y speed;

    xForce = 0; // internal x force to move;
    yForce = 0; // internal y force to move;

    xResistance = 0;
    yResistance = 5;

    jumpPower = -45;
    gravity = 20;

    xFriction = 3; // this is how much to deplete the internal force
    yFriction = 2;

    walls = {
        up: false,
        down: false,
        left: false,
        right: true,
    };

    pressed = {
        'ArrowRight': false,
        'Space': false,
    };

    keyMap = {
        'right': 'ArrowRight',
        'left': 'ArrowLeft',
        'jump': 'Space',
    };

    walkSpeed = 10;

    constructor(config) {
        super(config);
        Object.keys(config).forEach( (key) => {
            this[key] = config[key];
        });
    }
    update() {
        this.checkPosition();
        this.calcSpeed();
        this.move();
    }
    calcSpeed() {
        let y = 0;
        let x = 0;
        this.checkActions();
        this.applyGravity();
        this.applyForce();



        x += this.xForce + this.xResistance;
        y += this.yForce + this.yResistance;
        this.ySpeed = y;
        this.xSpeed = x;
    }
    applyGravity() {
        this.yResistance = this.gravity;
        if (this.walls.down) {
            this.yResistance = 0;
        }
    }
    applyForce() {
        if (this.yForce < 0) {
            this.yForce += this.yFriction;
            if (this.yForce > 0) {
                this.yForce = 0;
            }
        }
        if (this.yForce > 0) {
            this.yForce += -this.yFriction;
            if (this.yForce < 0) {
                this.yForce = 0;
            }
        }
        if (this.xForce < 0) {
            this.xForce += this.xFriction;
            if (this.xForce > 0) {
                this.xForce = 0;
            }
        }
        if (this.xForce > 0) {
            this.xForce += -this.xFriction;
            if (this.xForce < 0) {
                this.xForce = 0;
            }
        }
    }
    checkPosition() {
        if (this.y > 500) {
            this.walls.down = true;
        }
        if (this.y <= 500) {
            this.walls.down = false;
        }
        if (this.y > 640) {
            this.y = -100;
        }

        if (this.y < -this.h) {
            this.y = 640;
        }

        if (this.x > 360) {
            this.x = -100;
        }

    }
    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    jump() {
        this.yForce = this.jumpPower;
    }

    walkRight() {
        this.xForce = this.walkSpeed;
    }
    walkLeft() {
        this.xForce = -this.walkSpeed;
    }

    press(code) {
        this.pressed[code] = true;
    }
    release(code) {
        delete this.pressed[code];
    }

    checkActions() {
        if (this.pressed[this.keyMap['right']]) {
            this.walkRight();
        }
        if (this.pressed[this.keyMap['left']]) {
            this.walkLeft();
        }
        if (this.pressed[this.keyMap['jump']] && this.walls.down) {
            this.jump();
        }
    }

    draw() {

        super.draw();
    }


}
