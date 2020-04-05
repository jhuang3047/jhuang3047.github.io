console.log("the message!");

let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');


//console.log(theTxt)

const theButton = document.querySelector("#firstButton");
const theButton2 = document.querySelector("#secondButton");
const theButton3 = document.querySelector("#thirdButton");



//isClicked();
theButton.addEventListener('click',isClicked);
function isClicked(){
    console.log("clicked");
    theTxt.textContent = "By Marshall McLuhan & Quentin Fiore" ;

    theBody.style.backgroundImage= "url(https://i.pinimg.com/564x/da/7a/62/da7a629b3f86fadc7e5babfb15ad4116.jpg)" ;
   


}
theButton2.addEventListener('click',isClicked2)
function isClicked2(){
    console.log("clicked")
    
    theTxt.textContent = "1. The original title was supposed to be The Medium Is The Massage but the McLuhan liked the the error and decided to keep it.  2. McLuhan also predicted this global network aka the web before it even existed. He also knew that there would be 'One big gossip column that is unforgiving, unforgetful and from which there is no redemption.' We can see this instance happening all over social media.";
    theBody.style.backgroundImage = "url(https://images-na.ssl-images-amazon.com/images/I/71mk67eIEsL.jpg)" ;
 theBody.style.backgroundSize = "contain";

}
theButton3.addEventListener('click',isClicked3)
function isClicked3(){
    console.log("clicked")
    
    theTxt.textContent = "This book opened my eyes up to the continuous changes in media. It continues to grow at a rapid pace and media continues to be such a dominant part of many aspects of our lives. This book tells us that it is important that we disconnect from media sometimes and just stop and think. ";
    theBody.style.backgroundImage ="url(https://images-na.ssl-images-amazon.com/images/I/51NTCjY4giL._SX284_BO1,204,203,200_.jpg)";
    theBody.style.backgroundSize= "contain";
   
}
