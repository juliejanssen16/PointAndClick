document.getElementById("mainTitle").innerText="Point and click adventure";
document.getElementById("mainTitle").style.textAlign= "center"; 

const offsetCharacter = 16; 

const mainCharacter = documet.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");

gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";
    console.log(x);
}