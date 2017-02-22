var bigpee = 330;

function setup() {
createCanvas(1280, 615);
background(255);
frameRate(10);

}

function draw() {

//Doggy: 
//Doggy's head
noStroke();
fill(137, 75, 31);
rect(660, 230, 29, 20);

//Doggy's snout
noStroke();
fill(0);
rect(680, 230, 8, 8);

//Doggy's eye
noStroke();
fill(0);
rect(665, 230, 5, 5);

//Doggy's left ear
noStroke();
fill(137, 75, 31);
triangle(660, 230, 662, 227, 664, 230); 

//Doggy's body
noStroke();
fill(137, 75, 31);
rect(640, 249, 30, 20);

//Doggy's left back leg
stroke(137, 75, 31);
strokeWeight(2);
line(640, 260, 630, 260);

//Doggy's right back leg
stroke(137, 75, 31);
strokeWeight(2);
line(645, 269, 645, 278);

//Doggy's right front leg
stroke(137, 75, 31);
strokeWeight(2);
line(660, 269, 660, 278);

//Doggy's left front leg
stroke(137, 75, 31);
strokeWeight(2);
line(668, 269, 668, 278);

//Pee 1
noStroke();
fill(255, 228, 25);
ellipse(635, 266, 4, 4);

//Pee 2
noStroke();
fill(255, 228, 25);
ellipse(630, 268, 4, 4);

//Pee 3
noStroke();
fill(255, 228, 25);
ellipse(625, 270, 4, 4);

//Pee 4
noStroke();
fill(255, 228, 25);
ellipse(620, 274, 4, 4);

//Pee 5
noStroke();
fill(255, 228, 25);
ellipse(615, 279, 4, 4);

//Pee 6
noStroke();
fill(255, 228, 25);
ellipse(613, 284, 4, 4);

//Pee in rectangle
noStroke();
fill(255, 228, 25);
rect(590, bigpee, 50, 10);
bigpee = bigpee -1
if (bigpee <= 290) {
	bigpee=290;
	}

}