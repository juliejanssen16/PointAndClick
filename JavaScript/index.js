document.getElementById("mainTitle").innerText = "Point and click adventure";
document.getElementById("mainTitle").style.textAlign = "center";

const sec = 1000;
const mainCharacterSpeech = document.getElementById("textBubbleMC");
const offsetCharacter = 16;
const targetAudio = document.getElementById("targetAudio");
const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById("characterAudio");
const counterCharacter = document.getElementById("counterCharacter");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0 && counterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        playAudio();
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        console.log(x);

        //console.log(e.target.id);
        //showSpeech("Does this work?");

        switch (e.target.id) {
            case "doorOne":
                pauseAudio();
                // characterAudio.play();
                showSpeech(mainCharacterSpeech, characterAudio, "It's locked, sorry");
                console.log(" butaehfiuhji");
                // something insert here
                break;

            case "doorTwo":
                pauseAudio();
                showSpeech(mainCharacterSpeech, characterAudio, "It's locked, sorry");
                // something insert here
                break;

            case "targetSomething":
                pauseAudio();
                showSpeech(counterSpeech, targetAudio, "Go explore! <br> there are no special events today :)");
                // something insert here
                setTimeout(showSpeech, 5 * sec);
                break;

            default:
                playAudio();
                hideSpeech();
                // do something when it doesn't have a case
                break;
        }
    }
}


function showSpeech(targetBubble, targetAudio, dialog) {
    //put a talking sound                  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    targetBubble.style.opacity = 1;
    targetBubble.innerHTML = dialog;
    setTimeout(hideSpeech, 5 * sec, targetBubble, targetAudio);
    targetAudio.currentTime = 0;
    targetAudio.play();
}
function hideSpeech(targetBubble, targetAudio) {
    // mainCharacterSpeech.style.opacity = 0;
    //mainCharacterSpeech.innerHTML = "...";
    //characterAudio.pause();
    targetBubble.style.opacity = 0;
    targetBubble.innerHTML = "...";
    targetAudio.pause();
    //put and sound make it stop after the delay !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
const counterSpeech = document.getElementById("counterSpeech");
showSpeech(counterSpeech, characterAudio, "Hello sweetheart!");

var x = document.getElementById("characterAudio");

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}