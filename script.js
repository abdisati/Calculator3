//get the display element
const display=document.getElementById("display");

//define append function
function appendToDisplay(input){
    display.value+=input;
}

function calculate(){
    display.value=eval(display.value);
}

function clean(){
    display.value="";
}