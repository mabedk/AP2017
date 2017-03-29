var on = false;

//variables for the blob
var yoff = 0.0;
var radius = 150;
var R, G, B;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(255);
  noStroke();

if (on) { //if on is true/on this will happen:
	R = 255; //the R, G, B variables are defined as this
	G = 155;
	B = 203;
	
	push();
	translate(width / 2, height / 2);
	
	beginShape(); //shape will begin (BLOB IS SHOWN)
	fill(R, G, B); 
	var xoff = 0; //variable xoff wil be defined
	for (var a = 0; a < TWO_PI; a += 0.1) { //condition is relevant - when a is smaller than two_pi - if condition is true, increment a by 0.1
    var offset = map(noise(xoff, yoff), 0, 1, -25, 25); //offset will be defined as this
    var r = radius + offset; //radius will be defined as this
    var x = r * cos(a); //x coordinate will be defined as this
    var y = r * sin(a); //y coordinate will be defined as this
    vertex(x, y); //vertex created with the new defined x and y
    xoff += 0.1; //xoff will increase by 0.1
    }
    endShape(); //end shape
    
    yoff += 0.01; //yoff will increase by 0.01
    pop();

} else { //if on is not true/not on/off this will happen:
	R = 0; //the R, G, B variables are defined as this 
	G = 0;
	B = 0;
	
	fill(0); //text will appear (BLOB IS GONE)
	text("PRESS TO REVEAL BLOB", 120, 200);
	}	
}

function mousePressed() { //if the mouse is pressed within the canvas and on is false, on will become true. If on is true on will become false. 
if (mouseX > 0 && mouseX < 400 && mouseY > 0 && mouseY < 400 && on == false) { //condition
	on = true; //if condition is true, then on will be on
	} else {
	on = false; //if condition is false, then on will be off
	}
}
