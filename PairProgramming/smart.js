var theScore = 5;

var wrongButton1 = $("#wrongButton");
wrongButton1.onclick = function(){
    theScore-- ;
    
}
var wrongButton2 =$("#squarewrongButton1");
wrongButton2.onclick = function(){

    theScore--;
}
var wrongButton3 =$("#squarewrongButton2")
wrongButton3.onclick = function(){
    
    theScore--;
}
var wrongButton4= $("#squarewrongButton3")
wrongButton4.onclick = function(){
    
    theScore--;
}
var wrongButton5=$("#circlewrongButton1")
wrongButton5.onclick = function(){
    
    theScore--;
}
var wrongButton6=$("#circlewrongButton2")
wrongButton6.onclick = function(){
    
    theScore--;
}
var wrongButton7=$("#circlewrongButton3");
wrongButton7.onclick = function(){
    theScore--;
}
var wrongButton8=$("#rectanglewrongButton1");
wrongButton8.onclick = function(){
    theScore--;

}
var wrongButton9=$("#rectanglewrongButton2");
wrongButton9.onclick = function(){
    theScore--;
}
var wrongButton10=$("#rectanglewrongButton3");
wrongButton10.onclick = function(){
    theScore--;
}
//var correctButton =$("#correctButton","#squarecorrectButton","#rectanglecorrectButton","#circlecorrectButton");
var head2 = $("#head2");

// var gameEnd= $("#startButton").click(function(){
//     x = 5 ;
//     theScore = x ;
// })
var gameStart= $("startButton").click(function(){
   
    theScore = 5;
})

function above(){
if (theScore > 3) {
    head2.text('You are a genius!');

}
else if (theScore == 3) {
    head2.text('You are of average intelligence!');
}

else if (theScore < 3) {
    head2.text('You are below average intelligence!');

}}