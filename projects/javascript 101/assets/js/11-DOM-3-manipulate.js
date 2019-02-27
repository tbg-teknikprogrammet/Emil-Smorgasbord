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

// classList.add , classList.remove
})
/* 
------------------------------
Manipulationg text and content
------------------------------
*/

//select element
var pEle = document.querySelector(".test");
pEle.textContent = "This is a really <strong>awesome</strong> paragraph";
pEle.innerHTML = "This is a relly really <strong>awesome</strong> paragraph";

//chaining methods

document.getElementsByTagName("h1")[1].textContent = "The end!";
document.getElementsByTagName("h1")[1].innerHTML = "The <i>end!</i>";

//Use getAttribute() and setAttribute() to read and write attributes
//eg src and href

var link = document.querySelector("a");
link.getAttribute("href")
link.setAttribute("href", "https://www.youtube.com/")

//document.getElementsByTagName("img")[0].setAttribute("src", "assets/images/file.jpg");