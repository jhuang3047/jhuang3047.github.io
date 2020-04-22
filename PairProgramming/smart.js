htmlelement.onclick() = function(){
    
var theScore = 0 ;
var wrongButton = document.getElementById("wrongButton","squarewrongButton1","squarewrongButton2","squarewrongButton3","circlewrongButton1","circlewrongButton2","circlewrongButton3","rectanglewrongButton1","rectanglewrongButton2","rectanglewrongButton3");
var correctButton =document.getElementById("correctButton","squarecorrectButton","rectanglecorrectButton","circlecorrectButton")
var theText = document.querySelector('h2')

correctButton.onclick = function(){
    theScore = +1
}
wrongButton.onclick = function(){
    theScore =+0
}

if (theScore <= 4) {
    theTxt.textContent = "You are above average intelligence!";

}
if (theScore == 3) {
    theTxt.textContent = "You are of average intelligence!";
}
if (theScore >=0 || theScore <=2) {
    theTxt.textContent = "You are below average intelligence!";
}
}
