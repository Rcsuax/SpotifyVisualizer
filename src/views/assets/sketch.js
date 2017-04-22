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

function setup() {
    createCanvas(windowWidth, windowHeight);
    radius = 200;
    totalRays = 100;
    noiseMax = 300;
    angleStep = 365/totalRays;
    noiseSeeds = random(10000);
    rx = windowWidth/2;
    ry = windowHeight - 10;

}

function draw() {
	background(0);
	noFill();
    //stroke(random(255), random(255), random(255));
	//smokeyCircle(width/2, height/2);
	fill(255, 176, 255);
	shapes();
}

function smokeyCircle(x, y){
	
    push();
    translate(x,y);
	beginShape();
    
   for (var i = 0; i < totalRays; i++) {
        curRadius =  radius + noise(noiseSeeds) * noiseMax; //Creates movement
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



}
