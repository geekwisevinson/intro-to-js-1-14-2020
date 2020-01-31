class Player{
  life=100;
  el=document.createElement('div');
  lifeEl=document.createElement('div');
  name='No one';
  top=0;
  speed=0;
  constructor(input){
    console.log('Creating '+input['name']+' with HP: '+input['life']+'!');
    console.log('Creating with HP: !');
    this.name=input['name'];
    this.life=input['life'];
    this.updateLifeEl();
    this.append();
    this.el.style.position='absolute';
    this.draw()
    this.setRandomSpeed();
    setInterval(()=>{this.top+=this.speed;this.draw();}),100;
  }
  append(){
    document.body.appendChild(this.el);
    this.el.innerText=':'+this.name;
    this.el.appendChild(this.lifeEl);
  }
  updateLifeEl(){
    this.lifeEl.innerText='HP:'+Number(this.life);
  }
  draw(){
    this.top=this.top%(window.innerHeight+20)
    this.el.style.top=this.top+'px'
  }
  setRandomSpeed(){this.speed=Math.floor(5+Math.random()*10)}
}