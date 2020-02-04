//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();

function noteOn(note) {
    synth.triggerAttack(note);
}

function noteOff(note) {
    synth.triggerRelease();
}

//play a middle 'C' for the duration of an 8th note
document.addEventListener('keydown', function (event) {
    if (event.defaultPrevented) {
        return;
    }
    var key = event.key || event.keyCode;
    key2note={
        'z':'C5',
        'a':'D5',
        'q':'E5',
        '1':'F5',
        'x':'G5',
        's':'A5',
        'w':'B5',
        '2':'C6',
        'c':'C6',
        'd':'D6',
        'e':'E6',
        '3':'F6',
        'v':'G6',
        'f':'A6',
        'r':'B6',
        '4':'C7',
    }
    for (let keyb in key2note) {
        if (key === keyb) {
             noteOn(key2note[keyb]);
        }
    }
});
document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
        return;
    }
    var key = event.key || event.keyCode;
    noteOff();
});
