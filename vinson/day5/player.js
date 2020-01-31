class Player {
    life = 100;
    el = document.createElement('div');
    lifeEl = document.createElement('div');
    name = 'player 1';
    speed = 10;
    top = 0;
    constructor({life, name}) {
        this.name = name;
        this.life = life;
        this.append();
        this.el.addEventListener('click',  () => {
            this.clicked();
        });
        this.el.style.position = 'absolute';

       setInterval( () => {
           this.top += this.speed;
           const height = document.body.clientHeight;
           console.log(height);
           if (this.top > height) {
               this.top = - 100;
               score--;
               updateScore();
               this.setRandomSpeed();
           }
           this.draw();
       }, 50 );
    }

    append() {
        document.body.appendChild(this.el);
        this.el.innerText = this.name;
        this.el.prepend(this.lifeEl);
        this.updateLifeEl();
    }

    updateLifeEl() {
        this.lifeEl.innerText = 'life: ' + this.life;
    }

    draw() {
        this.el.style.top = this.top + 'px';
    }

    clicked() {
        this.life--;
        this.updateLifeEl();
        this.top = -100;
        score += 1;
        updateScore();
        this.setRandomSpeed();
    }
    setRandomSpeed() {
        this.speed += Math.floor( Math.random() * 8) + 5;
        if (this.speed > 20) {
            this.speed = 5;
            new Player({name: 'new Player', life: 100})
        }
    }
}
