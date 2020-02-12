//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
function num2note(num){
  let octave=Math.floor(num/12)-1;
  let note=['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'][num%12];
  return note+String(octave);
}
function noteOn(note){synth.triggerAttack(note);}
function noteOff(note){synth.triggerRelease();}
/*
Escape F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 
Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal Backspace 
Tab KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Backslash 
Capslock KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote Enter 
ShiftLeft KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash ShiftRight 

ArrowUp 
ArrowLeft ArrowDown ArrowRight 

Insert Home PageUp 
Delete End PageDown 
*/
function easyKey(rawchar){
  lookup={"`":"Backquote",1:"Digit1",2:"Digit2",3:"Digit3",4:"Digit4",5:"Digit5",6:"Digit6",7:"Digit7",8:"Digit8",9:"Digit9",0:"Digit0","-":"Minus","=":"Equal",q:"KeyQ",w:"KeyW",e:"KeyE",r:"KeyR",t:"KeyT",y:"KeyY",u:"KeyU",i:"KeyI",o:"KeyO",p:"KeyP",Q:"KeyQ",W:"KeyW",E:"KeyE",R:"KeyR",T:"KeyT",Y:"KeyY",U:"KeyU",I:"KeyI",O:"KeyO",P:"KeyP","[":"BracketLeft","]":"Bracket","\\":"Backslash",a:"KeyA",s:"KeyS",d:"KeyD",f:"KeyF",g:"KeyG",h:"KeyH",j:"KeyJ",k:"KeyK",l:"KeyL",A:"KeyA",S:"KeyS",D:"KeyD",F:"KeyF",G:"KeyG",H:"KeyH",J:"KeyJ",K:"KeyK",L:"KeyL",";":"Semicolon","'":"Quote",z:"KeyZ",x:"KeyX",c:"KeyC",v:"KeyV",b:"KeyB",n:"KeyN",m:"KeyM",Z:"KeyZ",X:"KeyX",C:"KeyC",V:"KeyV",B:"KeyB",N:"KeyN",M:"KeyM",",":"Comma",".":"Period","/":"Slash"};
  let convert=lookup[rawchar];
  return convert||rawchar;
}
function easyCommand(longdesc){
  if (Number(longdesc))
    return longdesc;
  return{'shiftdownsemitone':'SDS','shiftupsemitone':'SUS','shiftdownoctave':'SDO','shiftupoctave':'SUO','benddownsemitone':'BDS','bendupsemitone':'BUS','benddownoctave':'BDO','bendupoctave':'BUO','downchannel':'DC','upchannel':'UC','downmap':'DM','upmap':'UM','downscale':'DS','upscale':'US',}[longdesc];
}
down={"Escape":0,"F1":0,"F2":0,"F3":0,"F4":0,"F5":0,"F6":0,"F7":0,"F8":0,"F9":0,"F10":0,"F11":0,"F12":0,"Backquote":0,"Digit1":0,"Digit2":0,"Digit3":0,"Digit4":0,"Digit5":0,"Digit6":0,"Digit7":0,"Digit8":0,"Digit9":0,"Digit0":0,"Minus":0,"Equal":0,"Backspace":0,"Tab":0,"KeyQ":0,"KeyW":0,"KeyE":0,"KeyR":0,"KeyT":0,"KeyY":0,"KeyU":0,"KeyI":0,"KeyO":0,"KeyP":0,"BracketLeft":0,"BracketRight":0,"Backslash":0,"Capslock":0,"KeyA":0,"KeyS":0,"KeyD":0,"KeyF":0,"KeyG":0,"KeyH":0,"KeyJ":0,"KeyK":0,"KeyL":0,"Semicolon":0,"Quote":0,"Enter":0,"ShiftLeft":0,"KeyZ":0,"KeyX":0,"KeyC":0,"KeyV":0,"KeyB":0,"KeyN":0,"KeyM":0,"Comma":0,"Period":0,"Slash":0,"ShiftRight":0,"ArrowUp":0,"ArrowLeft":0,"ArrowDown":0,"ArrowRight":0,"Insert":0,"Home":0,"PageUp":0,"Delete":0,"End":0,"PageDown":0}
let transpose=0;
allCommands=['shiftdownsemitone','shiftupsemitone','shiftdownoctave','shiftupoctave','benddownsemitone','bendupsemitone','benddownoctave','bendupoctave','downchannel','upchannel','downmap','upmap','downscale','upscale']
let usermap={
  'z':36,'a':38,'q':40,'1':41,
  'x':43,'s':45,'w':47,'2':48,
  'c':48,'d':50,'e':52,'3':53,
  'v':55,'f':57,'r':59,'4':60,
  'b':60,'g':62,'t':64,'5':65,
  'n':67,'h':69,'y':71,'6':72,
  'F1':'shiftdownsemitone',   'F2':'shiftupsemitone',
  'F3':'shiftdownoctave',     'F4':'shiftupoctave',
  'F5':'benddownsemitone',    'F6':'bendupsemitone',
  'F7':'benddownsemitone',    'F8':'bendupsemitone',
  'F9':'downchannel',         'F10':'upchannel',
  'F11':'previousmap',        'F12':'nextmap',
};
let map={}
for (let item in usermap){
  map[easyKey(item)]=easyCommand(usermap[item]);
}//WW!
function runcommand(comm){
  switch(comm) {
    case "0":
    break;case"SDS": transpose--;
    break;case"SUS": transpose++;
    break;case"SDO": octave--;
    break;case"SUO": octave++;
    break;case"BDS": transpose--;
    break;case"BUS": transpose++;
    break;case"BDO": octave--;
    break;case"BUO": octave++;
    break;case"DC":  channel=Math.max(0, channel-1);
    break;case"UC":  channel=Math.min(16,channel+1);
    break;case"DM":  map--;
    break;case"UP":  map++;
    break;case"DS":  transpose=-5;octave=0;
    break;case"US":  transpose=0;octave=0;
    break;default:              
  }
}
function runcommand(comm){
  switch(comm) {
    case "0":
    break;case"BDS": transpose++;
    break;case"BUS": transpose--;
    break;case"BDO": octave++;
    break;case"BUO": octave--;
    break;default:              
  }
}
function isOkayToRun(eventcode,easykeybutton,down){
  return (eventcode===easykeybutton)?!(down[easykeybutton]):false
  //literally equivalent to if (event.code===easyKey(button) {if (down[easyKey(button)]){//do stuff}}), I just didn't want the nested if statemetns.
}
transpose=0;
octave=0;
document.addEventListener('keydown',function(event){
  event.preventDefault();
  //use event.code;
  if (!!(comm=map[event.code])&&!down[event.code]){
    down[event.code]=comm;
    if (Number(comm)){
      shiftNote=Number(comm)+transpose+octave*12;
      down[event.code]=shiftNote;
      noteOn(num2note(shiftNote));
    }else{
      //noteOn(100);//setTimeout(noteOff(100),100);
      runcommand(comm);
    }
  }
});
document.addEventListener('keyup',function(event){
  event.preventDefault();
  for(let button in map){
    if(event.code===easyKey(button)){
      let comm=down[easyKey(button)];
      if (Number(comm)){
        noteOff(num2note(comm));
      }else{
        runOffCommand(comm);
      }
      down[easyKey(button)]=false;
    }
  }
});