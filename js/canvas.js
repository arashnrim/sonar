const heroCanvas = document.getElementById("hero-canvas");
const heroCanvasContext = heroCanvas.getContext("2d");

/* Draws three concentric circles at the centre of heroCanvas */
function drawCircles() {
    heroCanvasContext.beginPath();
    heroCanvasContext.arc(250, 50, 200, 0, 2 * Math.PI);
    heroCanvasContext.stroke();

    heroCanvasContext.beginPath();
    heroCanvasContext.arc(0, 0, 75, 0, 2 * Math.PI);
    heroCanvasContext.stroke();

    heroCanvasContext.beginPath();
    heroCanvasContext.arc(0, 0, 50, 0, 2 * Math.PI);
    heroCanvasContext.stroke();
}

drawCircles();
