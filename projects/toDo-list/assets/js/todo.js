var userInput = "";
var list = [""];
document.getElementsByTagName("button")[0].addEventListener("click", function(){
    while (userInput != "quit"){
        userInput = prompt("What would you like to do?");
        if (userInput == "list") {
            if (list[0] == "") {
                console.log("Your list is currently empty.");
            }
            else {
                for (var i = 0; i < list.length; i++)
                console.log("[" + Number(i+1) + "] " + list[i]);
            }
        }
        if (userInput == "add"){
            if (list[0] == "") {
                userAdd = prompt("What would you like to add?");
                list.unshift(userAdd);
                list.pop();
                console.log(userAdd + " was added to the list.");
            }
            else {
                userAdd = prompt("What would you like to add?");
                list.push(userAdd);
                console.log(userAdd + " was added to the list.");
            }
        }
        if (userInput == "remove"){
            var userRemove = Number(prompt("What is the index of the item you would like to remove?"));
            if (userRemove > -1) {
                list.splice((userRemove-1), 1);
              }
            console.log(userRemove + " was removed from the list.");
        }
    }
});
