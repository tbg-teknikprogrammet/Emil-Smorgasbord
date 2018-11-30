//list a group of friends

var friend1 = "Måns";
var friend2 = "Pumpos";
var friend3 = "MrsWoman";
var friend4 = "MrMan";

//List a group of friends using an array

var friends = ["Måns", "Pumpos", "MrsWoman", "MrMan"] // strings, booleans, objects, numbers

console.log(friends[2] + " <3 " + friends[3]);

/*
***************************************
Arrays - different ways and values
***************************************
*/

var colors = []; // standard
var colors = new Array(); // Not that common
var randomArray = ["String", 31, true, false];
console.log(randomArray.length);

/*
***************************************
Arrays - built-in methods
***************************************
*/

// push(), pop(), shift(), unshift(), indexOf(), slice()

// push() - add an item at the end of an array
colors = ["red", "green", "blue"];
console.log(colors);
colors.push("purple");
console.log(colors);

// pop() - remove an item at the end of the array
colors.pop();
console.log(colors);

// unshift() - add an item at the beginning of the array
colors.unshift("Yellow");
console.log(colors);

// shift() - remove an item at the beginning of the array
colors.shift();
console.log(colors);

// indexOf - find the index of an item in the array
console.log(colors.indexOf("green")); // index of an item in the array
console.log(colors.indexOf("brown")); // -1 if the value is not found

// slice() - copy parts of an array
var fruits = ["Banana", "Orange", "Lemon", "Mango", "Pear"];

// Copy the 2nd and 3rd fruit
// specify index where the new array starts(1), and ends (3), does not include index 3
var citrus = fruits.slice(1, 3);
console.log(citrus);

var copyFruits = fruits.slice(fruits);
console.log(copyFruits);

/*
***************************************
Arrays - muntligt
***************************************
*/

var numbers = [2, 4, 30, 31];
console.log(numbers[numbers.length]);

var friendGroups = [
    ["A-dog", "B-dog", "C-dog"],
    ["F-cat", "G-cat", "H-cat"],
    ["I-man", "J-man", "K-man"]
]
console.log(friendGroups[1][1]);

/*
***************************************
Arrays - iteration - upprepning
***************************************
*/
//               0           1            2            3        4       5           6            
var cars = ["Audi A6", "Volvo 940", "Ford Mondeo", "Ferrari", "Landa", "Lada", "Citroën"];
for(var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

/*
***************************************
Arrays - iteration - forEach : Visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
***************************************
*/

// JavaScript provides an easy built-in way of iteratin over an array: forEach, a method used on arrays and is a part of the array prototype
// Concept: yourArray.forEach(aFunction); Most often written with an anonymous function
// forEach is more common to use when iterating an array

var countries = ["Sweden", "Norway", "Finland", "Denmark", "Island"];
countries.forEach(function(country) {
    console.log(country);
});

function countryList(country) {
    console.log("**************");
    console.log(country);
    console.log("**************");
    console.log("");
}

countries.forEach(countryList);

// Skillnaden mellan en for loop och forEach method är att i for-loopen hanterar vi ett nummer medan forEach är en inbyggd metod för
// en array, vilket loopar igenom varje värde i den specifika arrayen
// Om det vi vill loopa igenom _inte_ är en array, så fungerar alltså inte forEach

/*
***************************************
Arrays - iteration - forEach: muntlig övning
***************************************
*/

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var color = ["red", "green", "blue", "orange"];

number.forEach(function(color) { // color is not a good argument since we're not dealing with colors here
    if(color % 3 === 0) {
        console.log("Inside the forEach method: " + color);
    }
});

// Testa att skriva en for loop för detta istället
for(var i = 0; i < number.length; i++) {
    if(number[i] % 3 === 0) {
        console.log("Inside the for loop: " + number[i]);
    }
}

/*
***************************************
Arrays - Skriftlig övning
***************************************
*/

// Write a function printReverse() that takes an array
// as an argument and prints out the elements in the array 
// in reverse order (don't actually reverse the array itself)

function printReverse(myArr) {
    for(var i = myArr.length -1; i >= 0; i--) {
        console.log(myArr[i]);
    }
    // console.log(myArr.reverse());
}

printReverse([1,2,3,4,5,6]);

// Write a function isIdentical() which takes an array as an argument
// and returns true if all elements in the array are identical

function isIdentical(array) {
    for(var i = 1; i < array.length; i++) {
        if (array[i] != array[0]){
            return false;
        }
    }
    return true;
}

console.log(isIdentical([1,1,1,1,1])); // true
console.log(isIdentical([1,1,1,2,2])); // false

// write a function sumArray () that accepts an array of numbers
// and returns the sums of all the 