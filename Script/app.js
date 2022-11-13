var x= Math.floor((Math.random()*100)+1);

var guess= 0;

function myfunction(){

    var y = document.getElementById("number-field").value;

    if(y == x){
    alert("Congratulation! You guessed it right in " + guess + " attemps ");
    }if (y > x){
        guess++;
        alert("Sorry, try a smaller number");
    }if (y < x) {
        guess++;
        alert("Sorry, try a greater number");
    }if(y==""){
        alert("Please enter a number");
        return true;
    } 
}