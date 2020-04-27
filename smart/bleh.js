var head2 = document.querySelector('h2');
var theButton1 = document.querySelector("wrongButton1");
var theButton2 = document.querySelector("wrongButton2");
var theButton3 = document.querySelector("wrongButton3");


    var count =(function(){
    var counter =0;
        return function(){return counter +=1;}

    })()
    function displaycount(){
        document.getElementById("carrier").innerHTML =count();
        }
function above(){
    if (counter > 3) {
        head2.text('You are a genius!');
    
    }
    else if (counter == 3) {
        head2.text('You are of average intelligence!');
    }
    
    else if (counter < 3) {
        head2.text('You are below average intelligence!');
    
    }}