

var theScore = x ;
var x = 5;
var wrongButton1 = $("#wrongButton").onclick(function(){
    theScore = x - 1
})
var wrongButton2 =$("#squarewrongButton1").onclick(function(){
    theScore = x - 1
var wrongButton3 =$("#squarewrongButton2").onclick(function(){
    theScore = x - 1
var wrongButton4= $("#squarewrongButton3").onclick(function(){
    theScore = x - 1
var wrongButton5=$("#circlewrongButton1").onclick(function(){
    theScore = x - 1
var wrongButton6=$("#circlewrongButton2").onclick(function(){
    theScore = x - 1
var wrongButton7=$("#circlewrongButton3").onclick(function(){
    theScore = x - 1
var wrongButton8=$("#rectanglewrongButton1").onclick(function(){
    theScore = x - 1
var wrongButton9=$("#rectanglewrongButton2").onclick(function(){
    theScore = x - 1
var wrongButton10=$("#rectanglewrongButton3").onclick(function(){
    theScore = x - 1
//var correctButton =$("#correctButton","#squarecorrectButton","#rectanglecorrectButton","#circlecorrectButton");
var head2 = $("#head2");



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