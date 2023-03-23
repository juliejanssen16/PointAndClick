document.getElementById("mainTitle").innerText = "Point and click adventure";
document.getElementById("mainTitle").style.textAlign = "center";

const offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");

const characterAudio = document.getElementById("characterAudio");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    console.log(x);

    //console.log(e.target.id);
    showSpeech("Does this work?");

    switch (e.target.id) {
        case "doorOne":
            // characterAudio.play();
            showSpeech("this is door one");
            // something insert here
            break;

        case "doorTwo":
            showSpeech("this is door two");
            // something insert here
            break;

        default:
            showSpeech("unavailable clicked item");
            // do something when it doesn't have a case
            break;
    }
}
const mainCharacterSpeech = document.getElementById(textBubbleMC);

function showSpeech(dialog) {
    mainCharacterSpeech.innerText = dialog;
}
