var checkbox1;
var checkbox2;
var checkbox3;

var sliders = [];

var angle = 0;

function setup() {
	noCanvas();
	
	//sliders
	for (var i = 0; i < 207; i ++) { //the number that i is smaller than is the number of sliders
		sliders [i] = createSlider(0, 255, 50);
	}
	
	//checkboxes
	checkbox1 = createCheckbox('', false);
	checkbox1.position(450,480);
	
	checkbox2 = createCheckbox('', false);
	checkbox2.position(600, 480);
	
	checkbox3 = createCheckbox('', false);
	checkbox3.position(750, 480);


}

function draw() {

	var offset = 0;
	
	for(var i = 0; i < sliders.length; i++) {
		var x = map(sin(angle + offset), -1, 1, 0, 255);  //sin of the angel
		sliders[i].value(x); //the value of the slider
		offset += 0.05; //offset determines how off the sliders are in comparison of each other
	}
	//angle += 0.1; //the speed of the slider
	
	if (checkbox1.checked()) {
	angle += 0.20;
	} else {
	angle += 0.025;
	}
	
	if (checkbox2.checked()) {
	angle += 0.1;
	} else {
	angle += 0.025;
	}
	
	if (checkbox3.checked()) {
	angle += 0.50;
	} else {
	angle += 0.025;
	}
  
}
