function greet(person1, person2, person3, person4) {
    console.log("Hej," + person1 + "!");
    console.log("Hej," + person2 + "!");
    console.log("Hej," + person3 + "!");
    console.log("Hej," + person4 + "!");
}
greet("emil", "pablo", "risberg", "escobar");

function square(x) {
    return x * x;
}
console.log ("4 squared is " + square(4))

var result = square(10);
console.log(result);

function isEven(x) {
    if (x%2==0) {
        return true;
    }
    else return false;
}

console.log(isEven(13))

function kebabToSnake(str) {
    var newSnakeString = str.replace(/-/g, "_"); // replace makes a new copy of that string which is stored in new variable
    return newSnakeString;
}

console.log(kebabToSnake("hej-där-mannen"));

function localScope () {
    var showScope = 31;
    console.log(showScope);
}

localScope ();
console.log(showScope);

var showScope = "IM a global";
console.log(showScope);

var showScopeY = 99;
function localScopeY() {
    showScopeY = 100;
    console.log(showScopeY);
}

/* 

Higher order functions

*/

function sing () {
    console.log("I'm singing in the rain")
    console.log("It's funny on a sunny day  ")
}
/*setInterval(sing, 2500);

var anon = setInterval(function() {
    console.log("I'm an anonymous function")
}, 3000);*/

function myTimer() {
    var d = new Date();
    document.getElementById("output").innerHTML = d.toLocaleTimeString();
}

myTimer();

var myTime = setInterval(myTimer, 1000);

document.getElementsByTagName("button")[0].addEventListener("mouseenter", function(){
    clearInterval(myTime);
});
document.querySelector("button").addEventListener("mouseleave", function() {
    myTime = setInterval(myTimer, 1000);
});