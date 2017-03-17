var r = 0;
var plus = 10;
var posX = [];
var posY = [];
var numOfThings = 30; //number of circles created

function preload() {
	myFont = loadFont('Raleway-ExtraLight.ttf');
}


function setup() {
 createCanvas(windowWidth, windowHeight); 
 background(0);
 frameRate(10);
 
 sizeW = width/2; //controls the size
 sizeY = 20; //controls the size
 
for (var i = 0; i < numOfThings; i++) { //for loop to ensure random coordinates
	posX[i] = random(width); 
}

for(var i=0; i < numOfThings; i++) {
	posY[i] = random(height);
}

}

function draw() {

 textSize(40);
 textFont(myFont);
 noStroke();
 fill(0);
 text("this is circles.", width/2, height/2);

 ellipseW = sizeW - width/2;  //the width of the ellipses
 ellipseH = sizeY - height/2; //the height of the ellipses
 


for(i = 0; i < numOfThings; i++) {  //this for loop creates the ellipses
 circles(posX[i], posY[i], ellipseW, ellipseH);
}


sizeW += plus; //this makes the created ellipses bigger each time
sizeY += plus;

if (sizeW >= 2000 || sizeW <= 2) { //this ensures that at some point the circle size returns
	plus = plus * -1
	 }
	

}

function circles(x, y, width, height) { //function for the ellipses
	noFill();
	stroke(255, 30);
	strokeWeight(0.8);
	ellipse(x, y, width, height);
}



