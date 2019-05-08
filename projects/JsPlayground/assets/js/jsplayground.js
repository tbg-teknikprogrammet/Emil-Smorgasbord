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
var adBox = document.getElementsByClassName("bigAd")[0];
var overlay = document.getElementsByClassName("overlay")[0];

showAdBtn.addEventListener("click", function(){
    adBox.classList.add("popup");
    overlay.classList.add("dark");
})

overlay.addEventListener("click", function(){
    adBox.classList.remove("popup");
    overlay.classList.remove("dark");
})
window.onkeyup = function (event) {
    if (event.keyCode == 27) {
        adBox.classList.remove("popup");
        overlay.classList.remove("dark");
    }
   }
   /***************************
 
        Darkmodeswitch

****************************/

var dmSwitch = document.getElementsByClassName("btnBkg")[0];
var movingDot = document.getElementsByClassName("roundswitch") [0];
var sections = document.querySelectorAll("section");

dmSwitch.addEventListener("click", function(){
    movingDot.classList.toggle("right");
    dmSwitch.classList.toggle("darkerBackground");
    sections[0].classList.toggle("darkerBackground2");
    sections[9].classList.toggle("darkerBackground2");
    sections[10].classList.toggle("darkerBackground2");
    sections[12].classList.toggle("darkerBackground2");
    sections[16].classList.toggle("darkerBackground2");
    sections[2].classList.toggle("lightertext");
    sections[11].classList.toggle("lightertext");
    sections[20].classList.toggle("darkerBackground2");
})

/***************************
 
        Beaver Clicker Game

****************************/

var clickAmount = 0;
var logAmount = 0;
var clickAmountDisplay = document.getElementById("clickamountdisplay");
var beaver = document.getElementById("beaverimg");
var flyingLog = document.getElementsByClassName("flyinglog");
var helmet = document.getElementById("helmet");
var axe = document.getElementById("axe");
var energydrink = document.getElementById("energy");
var helmetOn = false;
var gameStarted = false;
var gameEnded = false;
var dead = false;
var axeOn = false;

if (gameEnded == false) {
    beaver.addEventListener("click", function(){
        gameStarted = true;
        if(dead==false){clickAmount++};
        clickAmountDisplay.innerHTML = clickAmount;
        //The beaver is wearing nothing
        if(helmetOn == false && axeOn == false) {
            if (clickAmount > 10 && clickAmount < 21) {
                beaver.src = "assets/images/Beaver2.png";
            }
            if (clickAmount > 20 && clickAmount < 31) {
                beaver.src = "assets/images/Beaver3.png";
            }
            if (clickAmount > 30 && clickAmount < 91) {
                beaver.src == "assets/images/Beaver4.png";
            }
            if (clickAmount == 50 && helmetOn==false) {
                alert("The beaver is getting tired and beaten up! Buy him a helmet!");
            }
            if (clickAmount == 75 && helmetOn==false) {
                alert("He is begging, buy a helmet!");
            }
            else if (clickAmount > 90 && helmetOn==false) {
                dead = true;
                clickAmount = 0;
                beaver.src = "assets/images/deadbeaver.png";
                alert("You've killed the beaver. How cruel!")
                gameEnded = true;
            }
        }
        // The beaver is only wearing a helmet
        else if(helmetOn==true && axeOn == false){
            beaver.src = "assets/images/Beaverhelmet.png";
            if (clickAmount > 40) {
                beaver.src = "assets/images/Beaverhelmet2.png";
            }
            if (clickAmount > 80) {
                beaver.src = "assets/images/Beaverhelmet3.png";
            }
            if (clickAmount > 120) {
                beaver.src = "assets/images/Beaverhelmet4.png";
            }
        }
        // The beaver is only using an axe
        else if(axeOn==true && helmetOn == false && gameEnded == false){
            clickAmount++;
            beaver.src = "assets/images/Beaveraxe.png";
            if(clickAmount>15){
                dead = true;
                clickAmount = 0;
                beaver.src = "assets/images/deadbeaver.png";
                alert("You've killed the beaver. How cruel!")
                gameEnded = true;
            }
        }
        // The beaver uses an axe and is wearing a helmet
        else if(axeOn==true && helmetOn == true){
            clickAmount++;
            beaver.src = "assets/images/Beaverhelmetaxe.png";
            if (clickAmount > 40) {
                beaver.src = "assets/images/Beaverhelmetaxe2.png";
            }
            if (clickAmount > 80) {
                beaver.src = "assets/images/Beaverhelmetaxe3.png";
            }
            if (clickAmount > 120) {
                beaver.src = "assets/images/Beaverhelmetaxe4.png";
            }
        }
    })
    
    // Flying log on click
    beaver.addEventListener("mousedown", function(){
        flyingLog[0].classList.add("highlog");
    })
    beaver.addEventListener("mouseup", function(){
        flyingLog[0].classList.remove("highlog");
    })
    //Running a function when the user clicks the helmet icon
    helmet.addEventListener("click", function(){
        if(clickAmount>49 && axeOn == true) {
            helmetOn = true;
            clickAmount = clickAmount-50;
            clickAmountDisplay.innerHTML = clickAmount;
            beaver.src = "assets/images/Beaverhelmet.png";
            if (clickAmount > 10) {
                beaver.src = "assets/images/Beaverhelmet2.png";
            }
            if (clickAmount > 20) {
                beaver.src = "assets/images/Beaverhelmet3.png";
            }
            if (clickAmount > 30) {
                beaver.src = "assets/images/Beaverhelmet4.png";
            }
        }
        else if(clickAmount>49 && axeOn == false) {
            helmetOn = true;
            clickAmount = clickAmount-50;
            clickAmountDisplay.innerHTML = clickAmount;
            beaver.src = "assets/images/Beaverhelmet.png";
            if (clickAmount > 10) {
                beaver.src = "assets/images/Beaverhelmet2.png";
            }
            if (clickAmount > 20) {
                beaver.src = "assets/images/Beaverhelmet3.png";
            }
            if (clickAmount > 30) {
                beaver.src = "assets/images/Beaverhelmet4.png";
            }
        }
        else if(clickAmount<50 && gameStarted == true){
            alert("You need at least 50 logs to buy a helmet");
        }
    })
    //Running a function when the user clicks the axe icon
    axe.addEventListener("click", function(){
        if(clickAmount>74 && helmetOn == true) {
            axeOn = true;
            clickAmount = clickAmount-75;
            clickAmountDisplay.innerHTML = clickAmount;
            beaver.src = "assets/images/Beaverhelmetaxe.png";
            if (clickAmount > 40) {
                beaver.src = "assets/images/Beaverhelmetaxe2.png";
            }
            if (clickAmount > 80) {
                beaver.src = "assets/images/Beaverhelmetaxe3.png";
            }
            if (clickAmount > 120) {
                beaver.src = "assets/images/Beaverhelmetaxe4.png";
            }
        }
        else if(clickAmount>74 && helmetOn == false) {
            axeOn = true;
            clickAmount = clickAmount-75;
            clickAmountDisplay.innerHTML = clickAmount;
            beaver.src = "assets/images/Beaveraxe.png";
            alert("The beaver needed a helmet, not an axe.")
        }
        else if(clickAmount<75 && gameStarted == true){
            alert("You need at least 75 logs to buy an axe");
        }
    })
    //Function when the energydrink icon is clicked
    energydrink.addEventListener("click", function(){
        if(clickAmount>1000) {
        beaver.src = "assets/images/Pumpedbeaver.png";
        }
        else {
            alert("You need at least 1000 logs to buy energy drink");
        }
    })
}
else if (gameEnded == true){
    alert("You have killed a hardworking beaver. How cruel!")
}