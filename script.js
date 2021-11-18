let canvas;
let canvasContext;
window.onload = function() {
    canvas = document.getElementById("snake-canvas");
    canvasContext = canvas.getContext("2d");
    drawAll();
};

function drawAll(){
    canvasContext.fillStyle = '#000000'
    canvasContext.fillRect(canvasContext.fillRect(0, 0, canvas.width, canvas.height)
    )}