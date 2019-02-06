var p2Score = 0;
var p1Score = 0;
var maxPnt = 5;

document.getElementById("p1").addEventListener("click", function(){
    p1Score++;
    document.getElementById("p1Score").innerHTML = p1Score;
})
document.getElementById("p2").addEventListener("click", function(){
    p2Score++;
    document.getElementById("p2Score").innerHTML = p2Score;
})
document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("p1Score").innerHTML = "0";
    document.getElementById("p2Score").innerHTML = "0";
})
