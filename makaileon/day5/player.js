class Player {
    life = 100;
    el = document.createElement('div');
    lifeEl = document.createElement('div');
    name = 'player 1';
    speed = 10; 
    top = 0;
    width = document.body.offsetWidth.clientWidth;


    constructor({name, life}) {
        this.name = name;
        this.life = life;
        this.append();
        this.el.addEventListener('click', () => {
            this.clicked();
        });
        this.el.style.position = 'absolute';
        this.speed = Math.floor( Math.random() * 8) + 5;
        setInterval( () => {
            this.top += this.speed;
            const height = document.body.clientHeight;
            console.log(height);
            if (this.top > height) {
                this.top = -100;
            }
            this.draw();
        }, 100 );
    }

    append() {
        document.body.appendChild(this.el);
        this.el.innerText = this.name;
        this.el.prepend(this.lifeEl);
        this.updateLifeEl();
        this.clicked();
    }

    updateLifeEl () {
        this.lifeEl.innerText = 'life: ' + this.life;
    }

    draw () {
        this.el.style.top = this.top + 'px';
        this.startPosition();
    }

    clicked () {
        document.addEventListener("contextmenu", function(e){
            e.preventDefault();
        }, false);
        this.life--;
        this.updateLifeEl();
        this.top= -100;
        score += 1;
        this.draw();
        updateScore();
    }

    startPosition (width) {
        this.width = Math.floor(Math.random() * 3000);
        return width;
    }
}