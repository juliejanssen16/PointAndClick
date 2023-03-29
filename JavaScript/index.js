document.getElementById("mainTitle").innerText = "Point and click adventure";
document.getElementById("mainTitle").style.textAlign = "center";

const sec = 1000;

const offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");

const characterAudio = document.getElementById("characterAudio");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    playAudio();
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    console.log(x);

    //console.log(e.target.id);
    showSpeech("Does this work?");

    switch (e.target.id) {
        case "doorOne":
            pauseAudio();
            // characterAudio.play();
            showSpeech("It's locked, sorry");
            console.log(" butaehfiuhji");
            // something insert here
            break;

        case "doorTwo":
            pauseAudio();
            showSpeech("It's locked, sorry");
            // something insert here
            break;

        default:
            playAudio();
            hideSpeech();
            // do something when it doesn't have a case
            break;
    }
}
const mainCharacterSpeech = document.getElementById("textBubbleMC");

function showSpeech(dialog) {
    mainCharacterSpeech.style.opacity = 1;
    mainCharacterSpeech.innerHTML = dialog;
    setTimeout(hideSpeech, 5 * sec);
}
function hideSpeech() {
    mainCharacterSpeech.style.opacity = 0;
    mainCharacterSpeech.innerHTML = "...";
    //put a talking sound and make it stop after the delay !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}

var x = document.getElementById("characterAudio");

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}