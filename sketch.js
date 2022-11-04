function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('myContainer')
}

function draw() {
  background(0,0,255, 50);
rect(40,58,30,30)
rect(87,42,59,59)
rect(65,78,23,23)
noStroke()
fill(255,0,87)
ellipse(mouseX , mouseY ,100,100)
}
