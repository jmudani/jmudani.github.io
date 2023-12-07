function setup() {
    createCanvas(800, 400);
    background(255);
    let resetButton = createButton('Reset');
    resetButton.position(windowWidth - 300, windowHeight - 170);
    resetButton.mousePressed(resetCanvas);
}
  
function draw() {
    if (mouseIsPressed) {
        translate(mouseX,mouseY);
        for (let i = 0; i < 10; i ++) {
            strokeWeight(1);
            fill(360,70,70,70);
            ellipse(0, 0, 30, 30);
            rotate(PI/5);
        }
    }
}
function resetCanvas() {
    clear();
    background(255);
}