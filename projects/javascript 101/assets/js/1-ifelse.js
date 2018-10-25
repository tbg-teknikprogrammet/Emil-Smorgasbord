/*var name = "Emil";
var age = 17;

if(age < 18) {
    console.log("STOPP! Du är " + age + " år gammal.");
}
else if (age > 18 && age < 45) {
    console.log("stopp där");
}
else {
    console.log("Välkommen");
}*/
//single line comment
/* Block line comment
************************    
        --- Guessing app ---
************************
*/

// Deklarera variabel
var secretNumber = 7;
//Anta user input
while (secretNumber != userInput) {
    var userInput = Number(prompt("Gissa tal mellan 1-10"));
//Läsa av villkoret
    if(userInput === secretNumber) {
        document.writeln("bra där");
    }
    else if (userInput === 6 || userInput === 8) {
        document.writeln("nästan");
    }
    else if (userInput < 7) {
        document.writeln("för lågt");
    }
    else {
        document.writeln("för högt");
    }
}
/*var age = Number(prompt("Din ålder: "));

if (age < 0 ) {
    document.writeln("Sorry my guy you aint born yet")
}
//Jämnt tal
if (age % 2 == 0) {
     document.writeln("Jämnt")
 }
else if (age % 2 == 1) {
    document.writeln("Udda")
 }
//Udda tal
*/