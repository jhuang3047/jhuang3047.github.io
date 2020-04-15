console.log("ES")

const theButton = $("#myButton").on("click",myfunction);
function myfunction() {
    console.log("click");
    $("h3").append("<p></p>yr a hero!");
}