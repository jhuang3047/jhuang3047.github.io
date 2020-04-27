
var counter = 0;
    var count =(function(){
        return function(){return counter +=1;}

    })()

function displaycount(){
        document.getElementById("carrier").innerHTML =count();
        }
function displayresult(){
    document.getElementById("result").innerHTML 
    if (counter > 3) {
        head2.text('You are a genius!');
    
    }
    else if (counter == 3) {
        head2.text('You are of average intelligence!');
    }
    
    else if (counter < 3) {
        head2.text('You are below average intelligence!');
    
    }}
