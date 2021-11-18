let canvas;
let canvasContext;
window.onload = function() {
    canvas = document.getElementById("snake-canvas");
    canvasContext = canvas.getContext("2d");
    drawAll();
};

function drawAll(){
    canvasContext.fillStyle = '#000000'
    canvasContext.fillRect(canvasContext.fillRect(0, 0, canvas.width, canvas.height),
    canvasContext.fillStyle = '#f23',
    canvasContext.fillRect(875, 225, 20, 20),
    canvasContext.fillStyle = 'lightgreen',
    canvasContext.fillRect(475, 125, 160, 30),
    )}

