class Spaceship {
    life = 100;
    name = 'player 1';
    ySpeed = 0;
    xSpeed = 0;
    
    constructor({life, name}) {
        this.name = name;
        this.life = life;
        this.append();
        this.el.style.position = 'absolute';
    };
}