function setup() {
createCanvas(1280, 615);
background(255);
frameRate(13);

}

function draw() {

//deleting background - the "fading" effect
noStroke();
fill(183, 228, 247, 40); 
ellipse(640, 350, 180, 180);

//mother flower stalk
stroke(106, 209, 118);
line(640, 309, 640, 415);
//mother flower leaves
push();
translate(width/2, height/2);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(249, 59, 123);
ellipse(0, 17, 17, 36);
pop();
//mother flower center
noStroke();
fill(249, 232, 97);
ellipse(640, 309, 8, 8);


//left mini flower 1 stalk
stroke(106, 209, 118);
line(605, 380, 605, 415);
//left mini flower 1 leaves
push();
translate(605, 380);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(186, 120, 226);
ellipse(0, 8, 8, 15);
pop();
//left mini flower 1 center
noStroke();
fill(249, 232, 97);
ellipse(605, 380, 5, 5);


//right mini flower 2 stalk
stroke(106, 209, 118);
line(680, 370, 680, 415);
//right mini flower 2 leaves
push();
translate(680, 370);
var cir = 360/9*(frameCount%9); 
rotate(radians(cir));
noStroke();
fill(255);
ellipse(0, 13, 13, 26);
pop();
//right mini flower 2 center
noStroke();
fill(249, 232, 97);
ellipse(680, 370, 8, 8);

}