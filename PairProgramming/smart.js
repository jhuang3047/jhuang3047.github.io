

var theScore = 5;
var wrongButton1 = $("#wrongButton");
wrongButton1.onclick = function(){
    theScore = theScore - 1
}
var wrongButton2 =$("#squarewrongButton1");
wrongButton2.onclick = function(){
    theScore = theScore - 1
}
var wrongButton3 =$("#squarewrongButton2")
wrongButton3.onclick = function(){
    theScore =  theScore - 1
}
var wrongButton4= $("#squarewrongButton3")
wrongButton4.onclick = function(){
    theScore =  theScore - 1
}
var wrongButton5=$("#circlewrongButton1")
wrongButton5.onclick = function(){
    theScore =  theScore - 1
}
var wrongButton6=$("#circlewrongButton2")
wrongButton6.onclick = function(){
    theScore =  theScore - 1
}
var wrongButton7=$("#circlewrongButton3");
wrongButton7.onclick = function(){
    theScore =  theScore - 1
}
var wrongButton8=$("#rectanglewrongButton1");
wrongButton8.onclick = function(){
    theScore =  theScore - 1

}
var wrongButton9=$("#rectanglewrongButton2");
wrongButton9.onclick = function(){
    theScore =  theScore - 1
}
var wrongButton10=$("#rectanglewrongButton3");
wrongButton10.onclick = function(){
    theScore =  theScore - 1
}
//var correctButton =$("#correctButton","#squarecorrectButton","#rectanglecorrectButton","#circlecorrectButton");
var head2 = $("#head2");

// var gameEnd= $("#startButton").click(function(){
//     x = 5 ;
//     theScore = x ;
// })
var gameStart= $("endButton").click(function(){
   
    theScore = 5 ;
})

function above(){
if (theScore >= 4) {
    head2.text('You are a genius!')

}}
function average(){
if (theScore === 3) {
    head2.text('You are of average intelligence!')
}}
function below(){
if (theScore  <= 2) {
    head2.text('You are below average intelligence!')

}}