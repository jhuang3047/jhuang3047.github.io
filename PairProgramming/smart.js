console.log("smart");

let theScore = 5;

const wrongButton1 = document.querySelector("#wrongButton"); 
wrongButton1.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
    theScore = theScore - 1
    
}
const wrongButton2 = document.querySelector("#squarewrongButton1");
wrongButton2.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
    theScore = theScore - 1
}
const wrongButton3 = document.querySelector("#squarewrongButton2")
wrongButton3.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
    theScore = theScore - 1
}
const wrongButton4 = document.querySelector("#squarewrongButton3")
wrongButton4.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
    theScore = theScore - 1
}
const wrongButton5 = document.querySelector("#circlewrongButton1")
wrongButton5.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
    theScore = theScore - 1
}
const wrongButton6 = document.querySelector("#circlewrongButton2")
wrongButton6.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
    theScore = theScore - 1
}
const wrongButton7= document.querySelector("#circlewrongButton3");
wrongButton7.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
    theScore = theScore - 1
}
const wrongButton8 = document.querySelector("#rectanglewrongButton1");
wrongButton8.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
    theScore = theScore - 1

}
const wrongButton9 = document.querySelector("#rectanglewrongButton2");
wrongButton9.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
    theScore = theScore - 1
}
const wrongButton10 = document.querySelector("#rectanglewrongButton3");
wrongButton10.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
    theScore = theScore - 1
}
//var correctButton =$("#correctButton","#squarecorrectButton","#rectanglecorrectButton","#circlecorrectButton");
const head2 = docunent.querySelector('h2');

// var gameEnd= $("#startButton").click(function(){
//     x = 5 ;
//     theScore = x ;
// })
const gameStart= document.querySelector("startButton")
startButton.addEventListener('click',isClicked);
function isClicked(){
    theScore = 5
}

function above(){
if (theScore >= 4) {
    head2.txtContent= "You are a genius!";

}
else if (theScore == 3) {
    head2.txtContent ="You are of average intelligence";
}

else if (theScore <= 2) {
    head2.txtContent= "You are below average intelligence!";

}}