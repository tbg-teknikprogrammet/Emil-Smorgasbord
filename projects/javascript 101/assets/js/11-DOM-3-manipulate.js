//select
var element = document.getElementById("highlight");
//manipulate
element.style.color = "orange";
element.style.border = "2px solid black";
element.style.fontSize = "20px";

var ele = document.querySelector("h1");
ele.classList.add("some-class");


//select
var styledEle = document.getElementsByClassName("special")[0];

//manipulate
styledEle.addEventListener("click", function(){
    styledEle.classList.toggle("wierd-class");
})