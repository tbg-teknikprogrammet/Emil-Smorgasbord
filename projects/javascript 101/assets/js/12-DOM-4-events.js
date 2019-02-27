//making things interactiv with events

//Events are everywhere
//clicking a button
//DragNdrop
//double click

/* How to do it????? */

// add event listener
//eg listen for a hover, click or keypress

/* The syntax */

// addEventListener("event", function (){})

//select the button

var btn = document.querySelector("button");
btn.addEventListener("click", function() {
    document.querySelector("p").innerHTML = "Someone clicked. I have no feelings"
})
//select
var lis = document.querySelectorAll("li");
//manipulate
for(var i=0; i<lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.textDecoration = "line-through"; // "this" refers to each li element
    });
}
//Toggle background color by adding and removing from css class
document.getElementById("btnToggleBg").addEventListener("click", function(){
    document.querySelector("body").classList.toggle("bodyClass"); 
})