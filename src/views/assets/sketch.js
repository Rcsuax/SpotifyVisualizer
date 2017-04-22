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

function setup() {
    createCanvas(windowWidth, windowHeight);
    radius = 200;
    totalRays = 50;
    noiseMax = 300;
    angleStep = 365/totalRays;
    noiseSeeds = random(10000);

}

function draw() {
	background(0);
	noFill();
    stroke(random(255), random(255), random(255));
	smokeyCircle(width/2, height/2);
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
