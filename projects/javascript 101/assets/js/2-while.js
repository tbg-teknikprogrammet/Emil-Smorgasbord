//while används när man inte vet hur många gånger koden behöver itereras

/*var text = "";
var i = 0;

while(i <= 20) {
    text += "Numret är: " + i + "<br>";
    i++;
    if (i>6) {
        break;
    }
}

document.getElementById("output").innerHTML = text;*/

//Skriv ut talen -19 -> 19
var text = "";
var i = -19;

while(i < 20) {
    text += i + "<br>";
    i++;
}
document.getElementById("uppgift1").innerHTML = text;

//Skriv ut alla jämna tal 10->40
var text2 = "";
i = 10;

while(i <= 40) {
    if (i % 2 == 0) {
        text2 += i + "<br>";
    }
    i++;
}
document.getElementById("uppgift2").innerHTML = text2;
//Skriv ut alla udda tal 300->333 
var text3 = "";
i = 300;

while(i <= 333) {
    if (i % 2 == 1) {
        text3 += i + "<br>";
    }
    i++;
}
document.getElementById("uppgift3").innerHTML = text3;
//Skriv ut alla tal mellan 5 och 50 som är delbara med 5 och 50
var text4 = "";
i = 5;

while(i <= 50) {
    if (i % 5 == 0) {
        text4 += i + "<br>";
    }
    i++;
}
document.getElementById("uppgift4").innerHTML = text4;
//Are we there yet?
var yes = "yes";
while (userInput != yes) {
    var userInput = (prompt("Are we there yet?"));
    if (userInput == yes) {
        alert("Yay, we finally made it!")
    }
}