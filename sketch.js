var dummyVar;

function setup() {
createCanvas(windowWidth, windowHeight);
dummyVar = 200;
var gui = createGui('Label');
gui.addGlobals('dummyVar');
}

function draw() {
	background(0);
  ellipse(width / 2, height / 2, dummyVar, 80);
}