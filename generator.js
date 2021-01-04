const vowels = ['a','e','i','o','u'];
const cmCon = ['t','n','s','r','h','l','d','c','m','f','p','g'];
const unCon = ['w','y','b','v','k','x','j','q','z'];

//reusable randomizer
const picker = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

//random name generator
const newName = x => {
    let name = [];
    //10% chance of vowel added to beginning of name
    if (Math.random() > .9) {
        name.push(picker(vowels));
    }
    //populates the name array
    while (name.length < x) {
        let i = Math.floor(Math.random() * 100);
        //80% chance of syllable with common letters
        if (i < 80) {
            //determines order of syllable components
            if (i % 2 === 0) {
                name.push(picker(vowels));
                name.push(picker(cmCon));
            } else {
                name.push(picker(cmCon));
                name.push(picker(vowels));
            }
        }
        //10% chance of syllable with uncommon letter
        if (i >= 80 && i <= 90) {
            //determines order of syllable
            if (i % 2 === 0) {
                name.push(picker(vowels));
                name.push(picker(unCon));
            } else {
                name.push(picker(unCon));
                name.push(picker(vowels));
            }
        }
        //10% chance of single consonant 
        if (i > 90) {
            //determines with 80% in favor of common
            if (i > 92) {
                name.push(picker(cmCon));
            } else {
                name.push(picker(unCon));
            }
        }
    }
    //capitalizes first letter, and joins array into one word
    let seg = name.splice(0,x);
    let init = seg.splice(0,1);
    return init[0].toUpperCase() + seg.join('');
}
//displays randomly generated name and activates TTS feature
const babyName = () => {
    let surName = document.getElementById('name').value;
    let msg = `${newName(Math.floor((Math.random()*7)+3))} ${newName(Math.floor((Math.random()*7)+3))} ${surName}`;
    document.getElementById("randomName").innerHTML = msg;
    speechSynthesis.speak(new SpeechSynthesisUtterance(msg));
}