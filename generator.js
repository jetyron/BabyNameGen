const vowels = ['a','e','i','o','u','y'];
const cons = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];


const newName = x => {
    let name = [];
    if (Math.random() > .9) {
        name.push(vowels[Math.floor(Math.random()* vowels.length)]);
    }
    while (name.length < x) {
        let i = Math.random() * 100;
        if (i < 45) {
            name.push(vowels[Math.floor(Math.random()* vowels.length)]);
            name.push(cons[Math.floor(Math.random()* cons.length)]);
        } else  if (i > 55) {
            name.push(cons[Math.floor(Math.random()* cons.length)]);
            name.push(vowels[Math.floor(Math.random()* vowels.length)]);
        } else {
            name.push(cons[Math.floor(Math.random()* cons.length)]);
        }
    }
    let seg = name.splice(0,x);
    let init = seg.splice(0,1);
    return init[0].toUpperCase() + seg.join('');
}

const babyName = () => {
    let surName = document.getElementById('name').value;
    let msg = `${newName(Math.floor((Math.random()*7)+3))} ${newName(Math.floor((Math.random()*7)+3))} ${surName}`;
    document.getElementById("randomName").innerHTML = msg;
    speechSynthesis.speak(new SpeechSynthesisUtterance(msg));
}