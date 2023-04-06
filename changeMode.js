let x=0;    
let currentMode=false;
const body=document.querySelector('body');
const display=document.querySelector('.display')
const changeMode = () => {
    console.log("button clicked",++x);
    currentMode = !currentMode;
    if (currentMode === true) {
        body.style.backgroundColor = "black";
        display.style.color = "white";
        console.log("going to dark mode");
    } else {
        body.style.backgroundColor = "white";
        display.style.color = "black";
        console.log("going to light mode");
        }
};