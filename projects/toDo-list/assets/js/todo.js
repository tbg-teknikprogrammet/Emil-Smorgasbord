var userInput = "";
//declare a list with one empty container
var list = [""];
//Start application on click
document.getElementsByTagName("button")[0].addEventListener("click", function(){
    while (userInput != "quit"){ //If input = click, close the app
        //Ask the user for input
        userInput = prompt("What would you like to do?");
        if (userInput == "list") {
            if (list[0] == "") { //If the first container is "", the list is empty
                console.log("Your list is currently empty.");
            }
            else {
                for (var i = 0; i < list.length; i++)
                //The output shows one number higher as an array starts at zero, for good looks
                console.log("[" + Number(i+1) + "] " + list[i]);
            }
        }
        if (userInput == "add"){
            if (list[0] == "") { //The empty list declared earlier only contains one item "" (empty container)
                userAdd = prompt("What would you like to add?");
                list.unshift(userAdd); //adds the useradd before the empty container
                list.pop(); //removes the empty container
                console.log(userAdd + " was added to the list.");
            }
            else { //When something else already has been added
                userAdd = prompt("What would you like to add?");
                list.push(userAdd); //Add the useradd in the end of the list
                console.log(userAdd + " was added to the list.");
            }
        }
        if (userInput == "remove"){
            var userRemove = Number(prompt("What is the index of the item you would like to remove?"));
            console.log(list[Number(userRemove-1)] + " was removed from the list.");
            //splice deletes the item with index userremove-1 because the list is displayed
            //for the user one higher compared to the array.
            //splice removes one item at the given index
            list.splice((userRemove-1), 1); 
        }
    }
});
