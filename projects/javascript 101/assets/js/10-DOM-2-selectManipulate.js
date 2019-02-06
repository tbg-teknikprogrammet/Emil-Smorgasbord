//it all starts with document; the root node
document.URL;
document.links;
document.body;
//etc

//select
//Takes a string argument and returns one element with a matching ID
var element = document.getElementById("highlight");
console.log(element); //log HTML
console.dir(element); //log object

//Takes a string argument and returns a list of elements that have a matching class name
var elements = document.getElementsByClassName("bolded");
console.log(elements);
console.dir(elements); 

//Takes a string argument and returns a list of elements that have a matching tag name
var eles = document.getElementsByTagName("li");

//Takes a string argument and returns the first element that matches a given CSS-style selector
//document.querySelector(".bolded");
//document.querySelector("h1");
//document.querySelector("#menu a.active");
//Searching for an item that doesn't exist returns null
var queryTag = document.querySelector(".bolded");

var queryAllTag = document.querySelectorAll(".bolded");

//uppgift

var pID = document.getElementById("first");
var queryP = document.querySelector("p");
var pClass = document.getElementsByClassName("special")[0];
var queryAllP = document.querySelectorAll("#first");
var tagP = document.getElementsByTagName("p")[0];
console.log(pID);
console.log(queryP);
console.log(pClass);
console.log(queryAllP);
console.log(tagP);



