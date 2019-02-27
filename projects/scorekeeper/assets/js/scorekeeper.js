var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var p2Score = 0;
var p1Score = 0;
var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var playingTo = document.querySelector("#playingTo");
var inputNumber = document.getElementsByTagName("input")[0];
var winnerText = document.querySelector("#winner");
var scoreLimit = 5;

//Change and show playing to value
inputNumber.addEventListener("click", function(){
    playingTo.innerHTML = this.value;
    scoreLimit = Number(this.value);
})
//Raise score function
p1Btn.addEventListener("click", function(){
    inputNumber.disabled = true;
    if (p1Score < scoreLimit-1){
        p1Score++;
        p1Display.innerHTML = p1Score;
    }
    else {
        winnerText.innerHTML = "Player one won!";
        p1Display.innerHTML = scoreLimit;
        p1Btn.disabled = true;
        p2Btn.disabled = true;
    }
})
p2Btn.addEventListener("click", function(){
    inputNumber.disabled = true;
    if (p2Score < scoreLimit-1){
        p2Score++;
        p2Display.innerHTML = p2Score;
    }
    else {
        winnerText.innerHTML = "Player two won!";
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        p2Display.innerHTML = scoreLimit;
    }
})
//Reset function
document.querySelector("#reset").addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    p1Display.innerHTML = p1Score;
    p2Display.innerHTML = p2Score;
    winnerText.innerHTML = "";
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    inputNumber.disabled = false;
})
