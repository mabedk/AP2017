var titles = [];
var imgBackground;
var imgStart;

function preload() {
    titles = loadStrings("assets/queen-song-titles.txt"); //the Queen song titles
    imgBackground = loadImage("assets/Mercury.jpg"); //mercury background
    imgStart = loadImage("assets/firstpic.jpg"); //start background
      
 }

function setup() {
    createCanvas(1280, 619); 
	image(imgStart, 0, 0); //start background placed in setup so it only shows once in the beginning
}
function draw() {
    textSize(16);

}
function mousePressed() {
	shuffle(titles, true); //shuffle function that shuffles between the titles (the text)
	image(imgBackground, 0, 0, 1280, 619); //mercury background
	noStroke();
    fill(255);
	text(titles[8], 910, 280); //4 lines of text from titles-document, started at a line and then shuffles 
	text(titles[3], 910, 305);
	text(titles[10], 910, 330);
	text(titles[11], 910, 355);
}
