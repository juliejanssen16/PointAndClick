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
let inventory = [];
const inventoryList = document.getElementById("inventoryList");
let moneyUser = 1000;
let socialSkills = 0;
const walkingCharacter = document.getElementById("walkingCharacter");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0 && counterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        //playAudio();
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        //console.log(x);

        //console.log(e.target.id);
        //showSpeech("Does this work?");

        switch (e.target.id) {

            case "doorOne":
                //pauseAudio();
                showSpeech(mainCharacterSpeech, characterAudio, "It's locked, I can't get in!");
                socialSkills = socialSkills + 5;
                console.log(moneyUser);
                console.log(socialSkills);
                //console.log(" butaehfiuhji");
                // something insert here
                break;

            case "doorTwo":
                //pauseAudio();
                showSpeech(mainCharacterSpeech, characterAudio, "It's locked, I can't get in!");
                socialSkills = socialSkills + 5;
                console.log(moneyUser);
                console.log(socialSkills);
                // something insert here
                break;

            case "infoBord":
                if (checkItem("information book")) {
                    showSpeech(counterSpeech, targetAudio, "Have a look in your information book, there you can see all of the information you need!");
                    socialSkills = socialSkills + 5;
                    console.log(moneyUser);
                    console.log(socialSkills);
                }
                else {
                    showSpeech(counterSpeech, targetAudio, "Go explore! <br> there are no special events today :) <br> Here you can have an information book so you know when there will be something to do!");
                    getItem("information book", "infoBook");
                    socialSkills = socialSkills + 5;
                    moneyUser = moneyUser + 45;
                    console.log(moneyUser);
                    console.log(socialSkills);
                }
                // pauseAudio();
                setTimeout(showSpeech, 5 * sec);
                break;

            case "doorThree":
                //pauseAudio();
                if (checkItem("strawberries")) {
                    //pauseAudio();
                    showSpeech(mainCharacterSpeech, characterAudio, "*knock knock*");
                    setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                    setTimeout(showSpeech, 4 * sec, counterSpeech, targetAudio, "Oh it's you again");
                    setTimeout(showSpeech, 8 * sec, counterSpeech, targetAudio, "How can I help you?");
                    setTimeout(showSpeech, 12 * sec, mainCharacterSpeech, characterAudio, "Can we talk?");
                    setTimeout(showSpeech, 16 * sec, counterSpeech, targetAudio, "About what love?");
                    setTimeout(showSpeech, 20 * sec, mainCharacterSpeech, characterAudio, "I just really need your advice on something. <br> please?");
                    setTimeout(showSpeech, 24 * sec, counterSpeech, targetAudio, "Alright alright..come in");
                    setTimeout(showSpeech, 28 * sec, mainCharacterSpeech, characterAudio, "*talking*");
                    setTimeout(showSpeech, 32 * sec, counterSpeech, targetAudio, "*talking*");
                    setTimeout(showSpeech, 40 * sec, counterSpeech, targetAudio, "You can always come back when you need me love!");
                    setTimeout(showSpeech, 45 * sec, mainCharacterSpeech, characterAudio, "Thank you so much, you really helped me!");
                    socialSkills = socialSkills + 40;
                    console.log(moneyUser);
                    console.log(socialSkills);
                    setTimeout(function () { counterCharacter.style.opacity = 0; }, 50 * sec);
                }
                else {
                    //pauseAudio();
                    showSpeech(mainCharacterSpeech, characterAudio, "*knock knock* Is anyone there?");
                    setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                    setTimeout(showSpeech, 4 * sec, counterSpeech, targetAudio, "Coming!");
                    setTimeout(showSpeech, 10 * sec, counterSpeech, targetAudio, "Hello darling, how can I help you?");
                    setTimeout(showSpeech, 14 * sec, mainCharacterSpeech, characterAudio, "I would like to buy some strawberries,please.");
                    setTimeout(showSpeech, 18 * sec, counterSpeech, targetAudio, "There you go!");
                    socialSkills = socialSkills + 10;
                    moneyUser = moneyUser - 3;
                    console.log(moneyUser);
                    console.log(socialSkills);
                    getItem("strawberries", "strawberries");
                    setTimeout(function () { counterCharacter.style.opacity = 0; }, 22 * sec);
                }
                break;

            case "doorFour":
                //pauseAudio();
                showSpeech(mainCharacterSpeech, characterAudio, "*knock knock* Hello?");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showSpeech, 4 * sec, counterSpeech, targetAudio, "What do you want?");
                setTimeout(showSpeech, 8 * sec, mainCharacterSpeech, characterAudio, "I just want to talk to you..");
                setTimeout(showSpeech, 12 * sec, counterSpeech, targetAudio, "I'm not interested, leave me alone!");
                setTimeout(showSpeech, 16 * sec, mainCharacterSpeech, characterAudio, "Well jeez, alright then..");
                getItem("bandage for the broken hearted", "bandage");
                socialSkills = socialSkills + 10;
                console.log(moneyUser);
                console.log(socialSkills);
                setTimeout(function () { counterCharacter.style.opacity = 0; }, 17 * sec);
                break

            default:
                // playAudio();
                //hideSpeech(targetBubble, targetAudio);
                // do something when it doesn't have a case
                break;
        }
    }
}


function showSpeech(counterSpeech, targetAudio, dialog) {
    //put a talking sound                  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    counterSpeech.style.opacity = 1;
    counterSpeech.innerHTML = dialog;
    setTimeout(hideSpeech, 5 * sec, counterSpeech, targetAudio);
    targetAudio.currentTime = 0;
    targetAudio.play();
}
function hideSpeech(counterSpeech, targetAudio) {
    // mainCharacterSpeech.style.opacity = 0;
    //mainCharacterSpeech.innerHTML = "...";
    //characterAudio.pause();
    counterSpeech.style.opacity = 0;
    counterSpeech.innerHTML = "...";
    targetAudio.pause();
    //put and sound make it stop after the delay !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
const counterSpeech = document.getElementById("counterSpeech");
showSpeech(counterSpeech, characterAudio, "Hello sweetheart! <br> I hope you'll have fun playing <br> my point and click adventure game!");

//var x = document.getElementById("walkingCharacter");

//function playAudio() {
//   x.play();
//}

//function pauseAudio() {
//   x.pause();
//}

function getItem(itemName, itemId) {
    if (!checkItem(itemName)) {
        inventory.push(itemName);
        console.log(inventory);
        showItem(itemName, itemId);
    }
    console.log(inventory);
}

function checkItem(item) {
    return inventory.includes(item);
}

function showItem(itemName, itemId) {
    let listItem = document.createElement("li");
    listItem.id = itemId;
    listItem.appendChild(document.createTextNode(itemName));
    inventoryList.appendChild(listItem);
}

getItem("bannana bread", "bannanaBread");
getItem("cold milk", "coldMilk");
getItem("sun flower", "sunFlower");
removeItem("cold milk", "coldMilk");

function removeItem(itemName, itemId) {
    inventory = inventory.filter(function (newInventory) {
        return newInventory !== itemName;

    });
    document.getElementById(itemId).remove();
}

function showMoney(moneyUserTwo) {
    moneyUserTwo = 1000;
    document.getElementById("dollarSign").innerHTML(moneyUserTwo);
}