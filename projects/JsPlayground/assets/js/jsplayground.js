/****************************

        SCOREKEEPER

*****************************/
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
inputNumber.addEventListener("input", function(){
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
/***************************
 
 SCOREKEEPER STOP

****************************/


/***************************
 
        SLIDESHOW

****************************/

var imageNumber = 1;
var imageOne = document.getElementById("one");
var imageTwo = document.getElementById("two");
var imageThree = document.getElementById("three");
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", function(){
    if(imageNumber==3){
        imageNumber= 1;
        imageThree.setAttribute("style", "display: none")
        imageOne.setAttribute("style", "display: flex")
    }
    else if(imageNumber==1){
        imageNumber = 2;
        imageOne.setAttribute("style", "display: none")
        imageTwo.setAttribute("style", "display: flex")
    }
    else if(imageNumber==2){
        imageNumber = 3;
        imageTwo.setAttribute("style", "display: none")
        imageThree.setAttribute("style", "display: flex")
    }
    document.getElementById("imgnumb").innerHTML = imageNumber;
})
prevButton.addEventListener("click", function(){
    if(imageNumber==1){
        imageNumber = 3;
        imageOne.setAttribute("style", "display: none")
        imageThree.setAttribute("style", "display: flex")
    }
    else if(imageNumber==3){
        imageNumber = 2;
        imageThree.setAttribute("style", "display: none")
        imageTwo.setAttribute("style", "display: flex")
    }
    else if(imageNumber==2){
        imageNumber = 1;
        imageTwo.setAttribute("style", "display: none")
        imageOne.setAttribute("style", "display: flex")
    }
    document.getElementById("imgnumb").innerHTML = imageNumber;
})


/***************************
 
        Drop-Down

****************************/

var dropDownBtn = document.getElementById("dropDownBtn");
var items = document.querySelectorAll("#dropDown li");
var list = document.querySelector("ul");

dropDownBtn.addEventListener("click", function(){
    for(i=0; i<3; i++) {
        items[i].classList.toggle("visible");
    }
    list.classList.toggle("collapsed");
})

/***************************
 
        Overlay

****************************/

var showAdBtn = document.getElementById("showAd");
var adBox = document.getElementById("bigAd");

showAdBtn.addEventListener("click", function(){
    adBox.classList.toggle("visible");
})

/***************************
 
        S5

****************************/
var s5 = document.getElementsByClassName("s5")[0];
s5.addEventListener("mouseover", function() {
    s5.setAttribute("style", "background-color: red")
})