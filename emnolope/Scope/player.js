class Player{
  life=100;
  el=document.createElement('div');
  lifeEl=document.createElement('div');
  name='No one';
  constructor(name,life){
    this.name=name;
    this.life=life;
    this.append();
  }
  append(){
    document.body.appendChild(this.el);
    this.el.innerText=this.name;
    this.el.appendChild(this.lifeEl);
  }
  updateLifeEl(){
    this.lifeEl.innerText='life'+this.life;
  }
}