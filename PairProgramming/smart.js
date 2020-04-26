

var theScore = x ;
var x = 5;
var wrongButton1 = $("#wrongButton")
var wrongButton2 =$("#squarewrongButton1");
var wrongButton3 =$("#squarewrongButton2");
var wrongButton4= $("#squarewrongButton3");
var wrongButton5=$("#circlewrongButton1");
var wrongButton6=$("#circlewrongButton2");
var wrongButton7=$("#circlewrongButton3");
var wrongButton8=$("#rectanglewrongButton1")
var wrongButton9=$("#rectanglewrongButton2")
var wrongButton10=$("#rectanglewrongButton3");
//var correctButton =$("#correctButton","#squarecorrectButton","#rectanglecorrectButton","#circlecorrectButton");
var head2 = $("#head2");

wrongButton1.click(function(){
    theScore = x - 1
})
wrongButton2.click(function(){
    theScore = x - 1
})
wrongButton3.click(function(){
    theScore = x - 1
})
wrongButton4.click(function(){
    theScore = x - 1
})
wrongButton5.click(function(){
    theScore = x - 1
})
wrongButton6.click(function(){
    theScore = x - 1
})
wrongButton7.click(function(){
    theScore = x - 1
})
wrongButton8.click(function(){
    theScore = x - 1
})
wrongButton9.click(function(){
    theScore = x - 1
})
wrongButton10.click(function(){
    theScore = x - 1
})


function above(){
if (theScore >= 4) {
    head2.text = ('You are a genius!')

}}
function average(){
if (theScore === 3) {
    head2.text = ('You are of average intelligence!')
}}
function below(){
if (theScore  <= 2) {
    head2.text = ('You are below average intelligence!')

}}