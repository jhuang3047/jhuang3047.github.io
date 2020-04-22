console.log("How Smart Are You?");
var theScore = 0 ;
const wrongButton = document.querySelector("#wrongButton","squarewrongButton1","squarewrongButton2","squarewrongButton3","circlewrongButton1","circlewrongButton2","circlewrongButton3","rectanglewrongButton1","rectanglewrongButton2","rectanglewrongButton3");
const correctButton =document.querySelector("#correctButton","#squarecorrectButton","#rectanglecorrectButton","circlecorrectButton")
const theText = document.querySelector('h2')
wrongButton.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked"); 
    theScore = +0;
}
correctButton.addEventListener('click',isClicked2);
function isClicked2(){
    console.log("clicked"); 
    theScore = +1;
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
