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