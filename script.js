let canvas;
let canvasContent;
window.onload = function() {
    console.log('fully parsed');
    canvas = document.getElementById('snake-canvas');
    canvasContent = canvas.getContext('2d');
    drawAll();
};

function drawAll(){
    canvasContent.fillStyle = 'black';
    canvasContent.fillRect = (0, 0, canvas.width, canvas.height);
    canvasContent.fillStyle = 'red';
    canvasContent.fillRect = (25, 25, 55, 55);
}