console.log("the message!");

const theButton = document.querySelector("#firstButton");
let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');

//console.log(theTxt)
const theButton2 = document.querySelector("#secondButton");
const theButton3 = document.querySelector("#thirdButton");



//isClicked();
theButton.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
   
    theTxt.textContent = "you turned me blue!";

    theBody.style.backgroundImage= "url(https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/8/1/1375354802439/Blue---the-colour-008.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=3dcd231cbcb89e3cea3e8aaf24c0b689)" ;
   
    theTxt.style.fontSize = "small";
   theButton.style.backgroundImage = "url(https://pbs.twimg.com/media/EBJtD4QWwAA2jvc.jpg)";
theButton.style.backgroundSize = "cover";

}
theButton2.addEventListener('click',isClicked2)
function isClicked2(){
    console.log("clicked")
    
    theTxt.textContent = "you turned me red !";
    theBody.style.backgroundImage = "url(https://pbs.twimg.com/media/EBJtD4QWwAA2jvc.jpg)" ;
    theTxt.style.fontSize = "large";
    theButton2.style.backgroundImage = "url(https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2013/8/1/1375354802439/Blue---the-colour-008.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=3dcd231cbcb89e3cea3e8aaf24c0b689)";
    theButton2.style.backgroundSize = "cover";

}
theButton3.addEventListener('click',isClicked3)
function isClicked3(){
    console.log("clicked")
    
    theTxt.textContent = "woah !";
    theBody.style.backgroundImage ="url(https://images3.pixlis.com/background-image-checkers-chequered-checkered-squares-seamless-tileable-medium-blue-red-orange-236mud.png)";
    theTxt.style.fontSize = "xxx-large";
    theTxt.style.color= "white";
   
}
