var farve = 0;

function setup() {
createCanvas(943, 573);
background(176, 196, 222);
//circle 7 - line 4
	noStroke();
	fill(255, 0, 0);
	ellipse(680, 415, 100, 100);
}

function draw() {
//tekst i toppen af canvas
fill(0);
textSize(19.8);
textFont("Andale Mono");
text("CLICK THE ERROR AND TURN THE PIECE INTO PERFECTION - IT MIGHT TAKE A FEW TRIES", 7, 31);

noStroke();
fill(250);

//circle 1 - line 1
	ellipse(50, 100, 100, 100);  
	
//circle 2 - line 1
	ellipse(155, 100, 100, 100); 

//circle 3 - line 1
	ellipse(260, 100, 100, 100); 
	
//circle 4 - line 1
	ellipse(365, 100, 100, 100);
	
//circle 5 - line 1
	ellipse(470, 100, 100, 100);

//circle 6 - line 1
	ellipse(575, 100, 100, 100);

//circle 7 - line 1 
	ellipse(680, 100, 100, 100);

//circle 8 - line 1
	ellipse(785, 100, 100, 100);

//circle 9 - line 1
	ellipse(890, 100, 100, 100);	

//circle 1 - line 2
	ellipse(50, 205, 100, 100);	

//circle 2 - line 2
	ellipse(155, 205, 100, 100);

//circle 3 - line 2
	ellipse(260, 205, 100, 100);

//circle 4 - line 2
	ellipse(365, 205, 100, 100);

//circle 5 - line 2
	ellipse(470, 205, 100, 100);

//circle 6 - line 2
	ellipse(575, 205, 100, 100);

//circle 7 - line 2
	ellipse(680, 205, 100, 100);

//circle 8 - line 2
	ellipse(785, 205, 100, 100);

//circle 9 - line 2
	ellipse(890, 205, 100, 100);
	
//circle 1 - line 3
	ellipse(50, 310, 100, 100);

//circle 2 - line 3
	ellipse(155, 310, 100, 100);

//circle 3 - line 3
	ellipse(260, 310, 100, 100);

//circle 4 - line 3
	ellipse(365, 310, 100, 100);

//circle 5 - line 3
	ellipse(470, 310, 100, 100);

//circle 6 - line 3
	ellipse(575, 310, 100, 100);

//circle 7 - line 3
	ellipse(680, 310, 100, 100);

//circle 7 - line 3
	ellipse(785, 310, 100, 100);

//circle 8 - line 3
	ellipse(890, 310, 100, 100);

//circle 1 - line 4
	ellipse(50, 415, 100, 100); 
	
//circle 2 - line 4
	ellipse(155, 415, 100, 100);

//circle 3 - line 4
	ellipse(260, 415, 100, 100);

//circle 4 - line 4
	ellipse(365, 415, 100, 100);

//circle 5 - line 4
	ellipse(470, 415, 100, 100);

//circle 6 - line 4
	ellipse(575, 415, 100, 100);

noStroke();
fill(250);

//circle 8 - line 4
	ellipse(785, 415, 100, 100);

//circle 9 - line 4
	ellipse(890, 415, 100, 100);
	
//circle 1 - line 5
	ellipse(50, 520, 100, 100); 

//circle 2 - line 5
	ellipse(155, 520, 100, 100);

//circle 3 - line 5
	ellipse(260, 520, 100, 100);

//circle 4 - line 5
	ellipse(365, 520, 100, 100);

//circle 5 - line 5
	ellipse(470, 520, 100, 100); 

//circle 6 - line 5
	ellipse(575, 520, 100, 100); 

//circle 7 - line 5
	ellipse(680, 520, 100, 100);    

//circle 8 - line 5
	ellipse(785, 520, 100, 100);

//circle 9 - line 5
	ellipse(890, 520, 100, 100);


}

function mouseClicked() {
if (farve == 0) {
	noStroke();
	fill(0, 255, 0);
	ellipse(680, 415, 100, 100);
	farve = farve + 1;
	} else if (farve == 1) {
	noStroke();
	fill(0, 0, 255);
	ellipse(680, 415, 100, 100);
	farve = farve + 1;
	} else if (farve == 2) {
	noStroke();
	fill(250);
	ellipse(680, 415, 100, 100);
	farve = farve + 1;
	}
}


	


