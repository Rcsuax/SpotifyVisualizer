var radius;
var totalRays;
var noiseMax;
var angleStep;
var noiseSeeds;
var x;
var y;
var posx;
var posy;
var curRadius
var rx;
var ry;
var xVal;
var yVal;
var gridRotator;

function setup() {
    createCanvas(windowWidth, windowHeight);
    radius = 200;
    totalRays = 100;
    noiseMax = 300;
    angleStep = 365/totalRays;
    noiseSeeds = random(10000);
    rx = windowWidth/2;
    ry = windowHeight - 10;
    gridRotator = 0;

}

function draw() {
	background(0);
	noFill();
    //stroke(random(255), random(255), random(255));
	//smokeyCircle(width/2, height/2);
	fill(255, 176, 255);
	shapes();
    stroke(random(255), random(255), random(255));
	smokeyCircle(width/2, height/2, stubWaveform());
    //drawGrid(10, 10);
}

function smokeyCircle(x, y, points){
	
    push();
    translate(x,y);
	beginShape();
    
   for (var i = 0; i < totalRays; i++) {
        curRadius =  radius + (points[i] * noiseMax); //Creates movement
        posx = sin((angleStep*i)) * curRadius; //Distributes x points
        posy = cos((angleStep*i)) * curRadius; //Distributes y points

        vertex(posx,posy);
        noiseSeeds += 0.01; //Increment all by 0.01

        //console.log();
    }
    endShape(CLOSE);
    pop();
    
}

function shapes(){


	for(var i = 0; i < width; i+=10){
		rect(i, ry, 10, 10);
		ry-=noise();
	}



function drawGrid(verticalLines, horizontalLines) {
    translate(width / 2, height / 2);
    rotate(gridRotator);
    yVal = height / horizontalLines;
    xVal = width / horizontalLines;
    stroke(255);
    push();

    for(var i = 0; i <= verticalLines; i++) {
        line((-width / 2) + i * xVal, -height / 2, (-width / 2) + i * xVal, height / 2);
    }
    pop();

    push();
    for (var j = 0; j <= horizontalLines; j++) {
        line(-width / 2, (-height / 2) + j * yVal, width / 2, (-height / 2) + j * yVal);       
    }
    pop();
    gridRotator += 0.01;
}

function stubWaveform() {
    var noiseSeed = random(10000);
    var stub = [];
    for (var i = 0; i < 1000; i++) {
        stub[i] = noise(noiseSeed);
        noiseSeed += 0.1;
    }
    return stub;
}
