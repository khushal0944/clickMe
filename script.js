const screenX = document.querySelector("div").offsetWidth;
const screenY = document.querySelector("div").offsetHeight;
const evil = document.querySelector("#evilButton")

let randomX;
let randomY;
let mouseX;
let mouseY;

const changePosition = ()=>{
    console.log("Position Changed");
    getRandomValues()
    if(mouseX === randomX || mouseY === randomY) getRandomValues()
    changeButton(randomX,randomY)
}

function changeButton(x,y){
    evil.style.left = `${x}px`;
    evil.style.top = `${y}px`;
}
function getRandomValues(){
    randomX = Math.floor(Math.random()*screenX)+1
    randomY = Math.floor(Math.random()*screenY)+1
}
document.addEventListener("mousemove",(e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY;

})