class Player {
    life = 100;
    el = document.createElement('div');
    lifeEl = document.createElement('div');
    name = 'player 1';
    constructor({life, name}) {
        this.name = name;
        this.life = life;
        this.append();
        this.el.addEventListener('click',  () => {
            this.life--;
            this.updateLifeEl();
        })
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
}
