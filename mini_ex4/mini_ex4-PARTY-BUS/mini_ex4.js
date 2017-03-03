var on = false;
var moveBus = -60;
var R, G, B;
var R2, G2, B2;
var song;

function preload() {
song = loadSound('assets/partysong.mp3');
}

function setup() {
	createCanvas(1280, 619);
	song.setVolume(1);
}

function draw() {    
//variable called so that background changes accordingly
if (on) {
	background(60);
	R = (random(255)); //if the background color is 60 the values of R, B, G is random
	G = (random(255));
	B = (random(255));
	R2 = 255; //if the background color is 60 the values of R2, B2, G2 is the same as background so that text is invisible
	G2 = 238;
	B2 = 94;
	
	noStroke();
	fill(20);
	cloud(150, 150, 30, 30);
	cloud(260, 190, 30, 30);
	cloud(240, 120, 30, 30);
	cloud(900, 130, 30, 30);
	cloud(1000, 150, 30, 30);
	
} else {
	background(230);
	R = 193; //if the background color is 230 the values of R, G, B is set
	G = 40;
	B = 40;
	R2 = 255; //if the background color is 60 the values of R2, B2, G2 is the same as background so that text is visible
	G2 = 114;
	B2 = 236;
	
	noStroke();
	fill(255);
	cloud(150, 150, 30, 30);
	cloud(260, 190, 30, 30);
	cloud(240, 120, 30, 30);
	cloud(900, 130, 30, 30);
	cloud(1000, 150, 30, 30);
}

	//switch
    noStroke();
    fill(255, 238, 94);
	rectMode(CENTER);
	ellipse(width/2, height/3, 100, 100, 10);
	
	//text for switch
	//unleash
	fill(R2, G2, B2);
	noStroke();
	textSize(15);
	textFont("arial black");
	text("UNLEASH", 599, 192);

	//the
	fill(R2, G2, B2);
	noStroke();
	textSize(16);
	textFont("arial black");
	text("THE", 620, 210);
	
	//party
	fill(R2, G2, B2);
	noStroke();
	textSize(16);
	textFont("arial black");
	text("PARTY", 610, 228);	
	
	//bus
	fill(R2, G2, B2);
	noStroke();
	textSize(16);
	textFont("arial black");
	text("BUS", 620, 245);

	bus(moveBus, 500);
	moveBus = moveBus + 1; //makes the bus move with 1 on the x axis

if (moveBus > width + 60) { //if the moveBus value gets bigger than width+60, then the value returns to -60
	moveBus = -60;
	}

}

function mousePressed() { 
if (mouseX > 588 && mouseX < 689 && mouseY > 151 && mouseY < 270 && on == false) { //only in this interval with the mousePressed function work
    on = true; 
    song.play();
    } else {
    on = false;
    song.stop();
    }
}


function bus(x, y) {
	//bus body
	noStroke();
	fill(R, G, B);
	rect(x, y, 87, 48, 5);
	
	//bus mirror
	noStroke();
	fill(0);
	rect(x + 48, y - 10, 3, 12, 3);
	
	//bus wheel 1
	noStroke();
	fill(0);
	ellipse(x - 27, y + 25, 10, 10);
	
	//bus wheel 2
	noStroke();
	fill(0);
	ellipse(x + 25, y + 25, 10, 10);
	
	//bus window 1
	noStroke();
	fill(183);
	rect(x - 11, y - 7, 56, 20, 3); 
	
	//bus window 2 front
	noStroke();
	fill(183);	
	rect(x + 30, y - 7, 20, 20, 3);
}

function cloud(x, y, width, height) {
	ellipse(x, y, width, height);
	ellipse(x - 20, y + 20, width, height);
	ellipse(x, y + 30, width, height);
	ellipse(x, y + 20, width, height);
	ellipse(x + 25, y + 5, width, height);
	ellipse(x + 45, y + 20, width, height);
	ellipse(x + 25, y + 25, width, height);
}