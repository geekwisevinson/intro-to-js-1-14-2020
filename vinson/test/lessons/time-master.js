class TimeMaster {
    startLoop = new Date();
    lastLoop = new Date();
    currentLoop = new Date();
    actions = {};
    fps = 1000;
    intervalTime = 100;
    step = 0;
    el = null;
    intervalID = null;
    data = {};

    constructor(props) {
        this.setIntervalTime((props && props.fps) ? props.fps : 1);
    }

    updateData(prop, value) {
        this.data[prop] = value;
    }

    start() {
        this.startLoop = new Date();
        this.intervalID = setInterval(() => {
            this.step += 1;
            this.updateTime();
            this.checkTime();
            this.getFps();
            this.doActions(this.step);
            this.updateHTML({html: this.myHTML()})
        }, this.intervalTime);
        console.log(this.intervalTime, '********')
    }

    myHTML() {
        console.log('myHTML')
    }

    end() {
        clearInterval(this.intervalID);
    }

    updateTime() {
        return this.currentLoop = new Date();
    }

    checkTime() {
        return this.getTimeSinceStart();
    }

    getFps() {
        this.currentLoop = new Date();
        this.fps = 1000 / (this.currentLoop - this.lastLoop);
        this.lastLoop = this.currentLoop;
        return this.fps;
    }

    getTimeSinceStart() {
        return (this.currentLoop - this.startLoop) / 1000;
    }

    setIntervalTime(fps) {
        this.intervalTime = 1000 / fps;
        return this.intervalTime;
    }

    setAction(step, actions) {
        if (!this.actions[step]) {
            this.actions[step] = [];
        }
        this.actions[step].push(actions);
    }

    doActions(step) {
        if (this.actions[step]) {
            console.log('Action Step', step);
            this.actions[step].forEach((action) => this.doAction(action))
        } else {
        }
    }

    doAction(action) {
        console.log(action[0].name);
        action[0](action[1]);
    }

    createEl(config) {
        this.removeEl();
        this.el = document.createElement(config.type);
        this.el.controller = this;
    }

    log() {
        delete this.el.controller;
        console.log(this);
        this.el.controller = this;
    }

    removeEl() {
        if (this.el) {
            this.el['remove']();
        }
        this.el = null;
    }

    append(config) {
        config.parent['appendChild'](this.el);
    }

    prepend(config) {
        config.parent['prepend'](this.el);
    }

    updateHTML(config) {
        if (this.el) {
            this.el['innerHTML'] = config['html'];
        } else {
            console.log('no el', this.el, config);
        }
    }

    updateStyle(config) {
        for (let prop in config) {
            if (config.hasOwnProperty(prop)) {
                this.el['style'][prop] = config[prop];
            }
        }
    }

    replace(config) {
        if (this.el) {
            const newNode = document.createElement(config.type);
            this.el['parentNode'].insertBefore(newNode, this.el['nextSibling']);
            this.el['remove']();
            this.el = newNode;
        }
    }

    doTil(actionFunc, conditionFunc, finishedFunc) {
        const doTilId = setInterval(() => {
            if (conditionFunc()) {
                actionFunc();
            } else {
                if (finishedFunc) {
                    finishedFunc();
                }
                clearInterval(doTilId);
            }
        }, this.intervalTime);
    }
}


// function createHeader() {
//     const timeMaster = new TimeMaster();
//     timeMaster.myHTML = stepperHTML;
//     timeMaster.setAction(1, [timeMaster.createEl.bind(timeMaster), {type: 'h1'}]);
//     timeMaster.setAction(2, [timeMaster.append.bind(timeMaster), {parent: document.body}]);
//     timeMaster.setAction(3, [timeMaster.updateHTML.bind(timeMaster), {html: 'HELLO'}]);
//     timeMaster.setAction(4, [timeMaster.updateStyle.bind(timeMaster), {color: 'yellow'}]);
//     timeMaster.setAction(4, [timeMaster.updateStyle.bind(timeMaster), {position: 'absolute'}]);
//     timeMaster.setAction(5, [timeMaster.updateStyle.bind(timeMaster), {top: '30px'}]);
//     timeMaster.setAction(6, [timeMaster.updateStyle.bind(timeMaster), {left: '30px'}]);
//     timeMaster.setAction(100, [timeMaster.end.bind(timeMaster)]);
//
//     timeMaster.start();
// }
// function createParagraph() {
//     const timeMaster = new TimeMaster();
//     timeMaster.myHTML = stepperHTML;
//     timeMaster.setAction(1, [timeMaster.createEl.bind(timeMaster), {type: 'p'}]);
//     timeMaster.setAction(2, [timeMaster.append.bind(timeMaster), {parent: document.body}]);
//     timeMaster.setAction(3, [timeMaster.updateHTML.bind(timeMaster), {html: 'This is a paragraph!'}]);
//     timeMaster.setAction(4, [timeMaster.updateStyle.bind(timeMaster), {color: 'red'}]);
//     timeMaster.setAction(4, [timeMaster.updateStyle.bind(timeMaster), {position: 'absolute'}]);
//     timeMaster.setAction(6, [timeMaster.updateStyle.bind(timeMaster), {top: '300px'}]);
//     timeMaster.setAction(100, [timeMaster.end.bind(timeMaster)]);
//     timeMaster.start();
// }

function createStepperKeeper() {
    const timeMaster = new TimeMaster();
    timeMaster.myHTML = stepperHTML;
    timeMaster.setAction(1, [timeMaster.createEl.bind(timeMaster), {type: 'p'}]);
    timeMaster.setAction(1, [timeMaster.append.bind(timeMaster), {parent: document.body}]);
    timeMaster.setAction(1, [timeMaster.updateStyle.bind(timeMaster), stepperStyles()]);
    timeMaster.start();
}

// createStepperKeeper();

function createPlayer() {
    const timeMaster = new TimeMaster();
    timeMaster.myHTML = htmlPlayer;
    timeMaster.updateData('health', 100);
    timeMaster.updateData('attack', 10);
    timeMaster.updateData('attackType', 'Fire');
    timeMaster.setAction(1, [timeMaster.createEl.bind(timeMaster), {type: 'p'}]);
    timeMaster.setAction(1, [timeMaster.append.bind(timeMaster), {parent: document.body}]);
    timeMaster.setAction(1, [timeMaster.updateStyle.bind(timeMaster), stepperStyles()]);
    timeMaster.start();
    return timeMaster;
}

// const player1 = createPlayer();

function stepperHTML() {
    return `
<div>
     <div><span>Stepper: </span><span>${this.step}</span></div>
</div>
        `
}

function stepperStyles() {
    return {
        color: 'red',
        fontSize: '40px',
        // position: 'absolute',
        // top: '10px',
        opacity: .3
    };
}

function htmlPlayer() {
    return `
<div style="border: 1px solid black">
     <div><span>Health: </span><span>${this.data['health']}</span></div>
      <div><span>Attack: </span><span>${this.data['attack']}</span></div>
            <div><span>Attack Type: </span><span>${this.data['attackType']}</span></div>
</div>
        `;
}
