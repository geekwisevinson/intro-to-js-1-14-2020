function buildSky(){
  const azora=document.createElement('img');
  azora.src='background.png';
  document.body.appendChild(azora);
  return azora;
}
function buildCanvas(){
  const canvas=document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.width=360;
  canvas.height=640;
  return canvas;
}
const canvas=buildCanvas();
const azora=buildSky();
const context=canvas.getContext('2d');
const bird={x:0,y:0,vx:0,vy:0,h:70,push:0,}
const src={x:0,y:0,w:canvas.width,h:canvas.height,};
const dst={x:0,y:0,w:canvas.width,h:canvas.height,};
const bck={x:0,y:0,w:canvas.width,h:canvas.height,};
const pipe={x:200,y:0,w:80,h:640,};
function draw(){
  context.drawImage(
    azora,
    src.x,src.y,src.w,src.h,
    dst.x,dst.y,dst.w,dst.h,
  );
}
//document.addEventListener('DOMContentLoaded',function(){draw();});
function drawBird(){
  context.drawImage(
    azora,
    361,80+bird.push*bird.h,80,bird.h,
    50,bird.y,80,70,
  )
}
function drawPipe(){
  context.drawImage(
    azora,
    360,0,80,80,
    pipe.x,0,pipe.w,pipe.h-100,    
  )
  context.drawImage(
    azora,
    360,0,80,80,
    pipe.x,canvas.height,pipe.w,-canvas.height+pipe.h+100, 
  )
}
function updatePipe(){
  pipe.x--;
  if (pipe.x==-90){
    pipe.x=360;
    pipe.h=(0.8+(0.2-0.8)*Math.random())*canvas.height;
  }
}
function bumpBird(){
  if (bird.push===2){
    bird.push=3;
    return;
  }
  else if (bird.push===3){
    setTimeout(()=>{bird.push=0;},5000);
    bird.push=4;
    return;
  }
  else if (bird.push===4){
    return;
  }
  bird.vy=-12;
  bird.push=1;
  setTimeout(()=>{bird.push=0;},350);
}
function deadbird(){
  bird.vy=50;
  bird.push=2;
}
function updateBird(){
  bird.y+=bird.vy;
  bird.vy+=0.55;
  bird.vy-=bird.vy*0.05;
  if(bird.y>canvas.height-bird.h){
    bird.y=canvas.height-bird.h;
     bird.vy=0;
  }
  if(bird.y<0){
    bird.y=0;
    bird.vy=-bird.vy;
  }
//  bird.push=
//    (bird.vy>0)?
//    (0):
//    (1*(()=>{setTimeout(()=>{bird.push=0;},30);return 1;})());
}
function drawBackground(){
  context.drawImage(
    azora,
    src.x,src.y,src.w,src.h,
    bck.x,bck.y,bck.w,bck.h,
  );
  context.drawImage(
    azora,
    src.x,src.y,src.w,src.h,
    bck.x+bck.w,bck.y,bck.w,bck.h,
  );
}
function updateBackground(){
  bck.x--;
  if (bck.x===-bck.w){
    bck.x=0;
  }
}           function buildSky(){
  const azora=document.createElement('img');
  azora.src='background.png';
  document.body.appendChild(azora);
  return azora;
}
function buildCanvas(){
  const canvas=document.createElement('canvas');
  document.body.appendChild(canvas);
  canvas.width=360;
  canvas.height=640;
  return canvas;
}
const canvas=buildCanvas();
const azora=buildSky();
const context=canvas.getContext('2d');
const bird={x:0,y:0,vx:0,vy:0,h:70,push:0,}
const src={x:0,y:0,w:canvas.width,h:canvas.height,};
const dst={x:0,y:0,w:canvas.width,h:canvas.height,};
const bck={x:0,y:0,w:canvas.width,h:canvas.height,};
const pipe={x:200,y:0,w:80,h:640,};
function draw(){
  context.drawImage(
    azora,
    src.x,src.y,src.w,src.h,
    dst.x,dst.y,dst.w,dst.h,
  );
}
//document.addEventListener('DOMContentLoaded',function(){draw();});
function drawBird(){
  context.drawImage(
    azora,
    361,80+bird.push*bird.h,80,bird.h,
    50,bird.y,80,70,
  )
}
function drawPipe(){
  context.drawImage(
    azora,
    360,0,80,80,
    pipe.x,0,pipe.w,pipe.h-100,    
  )
  context.drawImage(
    azora,
    360,0,80,80,
    pipe.x,canvas.height,pipe.w,-canvas.height+pipe.h+100, 
  )
}
function updatePipe(){
  pipe.x--;
  if (pipe.x==-90){
    pipe.x=360;
    pipe.h=(0.8+(0.2-0.8)*Math.random())*canvas.height;
  }
}
function bumpBird(){
  if (bird.push===2){
    bird.push=3;
    return;
  }
  else if (bird.push===3){
    setTimeout(()=>{bird.push=0;},5000);
    bird.push=4;
    return;
  }
  else if (bird.push===4){
    return;
  }
  bird.vy=-12;
  bird.push=1;
  setTimeout(()=>{bird.push=0;},350);
}
function deadbird(){
  bird.vy=50;
  bird.push=2;
}
function updateBird(){
  bird.y+=bird.vy;
  bird.vy+=0.55;
  bird.vy-=bird.vy*0.05;
  if(bird.y>canvas.height-bird.h){
    bird.y=canvas.height-bird.h;
     bird.vy=0;
  }
  if(bird.y<0){
    bird.y=0;
    bird.vy=-bird.vy;
  }
//  bird.push=
//    (bird.vy>0)?
//    (0):
//    (1*(()=>{setTimeout(()=>{bird.push=0;},30);return 1;})());
}
function drawBackground(){
  context.drawImage(
    azora,
    src.x,src.y,src.w,src.h,
    bck.x,bck.y,bck.w,bck.h,
  );
  context.drawImage(
    azora,
    src.x,src.y,src.w,src.h,
    bck.x+bck.w,bck.y,bck.w,bck.h,
  );
}
function updateBackground(){
  bck.x--;
  if (bck.x===-bck.w){
    bck.x=0;
  }
}
let step=0;
function gameLoop(){
  //context.clearRect();
  updateBackground();
  updateBird();
  updatePipe();
  updatePipe();
  updatePipe();
  drawBackground();
  drawBird();
  console.log('gameloop');
  console.log(step);
  drawPipe();
  //checkCollision();
  window.requestAnimationFrame(gameLoop);
  step++;
}
document.addEventListener("keydown",function dealWithKeyboard(e){if(event.key===' '){bumpBird();}}, false);
console.log('uwu bitch');
gameLoop();
