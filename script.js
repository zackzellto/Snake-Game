let canvas;
let canvasContext;
let appleImage = document.getElementById('apple-image');
window.onload = function() {
    canvas = document.getElementById("snake-canvas");
    canvasContext = canvas.getContext("2d");
    drawAll();
};

function drawAll(){
    let moveAppleWidth = Math.floor(Math.random() * (canvas.width - 15));
    let moveAppleHeight = Math.floor(Math.random() * (canvas.height - 15));
    canvasContext.fillStyle = '#000000'
    canvasContext.fillRect(canvasContext.fillRect(0, 0, canvas.width, canvas.height),
    canvasContext.fillStyle = '#f23',
    canvasContext.fillRect(moveAppleWidth, moveAppleHeight, 20, 20),
    canvasContext.fillStyle = 'lightgreen',
    canvasContext.fillRect(475, 125, 160, 30),
    )}