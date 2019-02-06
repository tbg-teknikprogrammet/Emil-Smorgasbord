//1- Select element
//2- Manipulate element

var h1 = document.querySelector("h1");
var button = document.querySelector("button");

button.addEventListener("click", function() {
    h1.style.color = "red";
})
