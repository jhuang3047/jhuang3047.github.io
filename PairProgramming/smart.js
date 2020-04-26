

var theScore = 0 ;
//var wrongButton = $(".wrongButton",".squarewrongButton1",".squarewrongButton2",".squarewrongButton3",".circlewrongButton1",".circlewrongButton2",".circlewrongButton3",".rectanglewrongButton1",".rectanglewrongButton2",".rectanglewrongButton3");
var correctButton =$("#correctButton","#squarecorrectButton","#rectanglecorrectButton","#circlecorrectButton");
var head2 = $("#head2");

correctButton.click(function(){
    theScore + 1
})
// wrongButton.click(function(){
//     theScore =+0
// })

function above(){
if (theScore >= 4) {
    head2.text = ('You are above average intelligence!')

}}
function average(){
if (theScore === 3) {
    head2.text = ('You are of average intelligence!')
}}
function below(){
if (theScore  <= 2) {
    head2.text = ('You are below average intelligence!')

}}