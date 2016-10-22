//keyboard swipe alpabet
//

var display;

var head;
var text;

function setup() {
	loadJSON("data/inventions_small.json", drawData);
}

function draw() {


}



function drawData(data){
	
	var number = int(random(33));
	
	var invention = data[number];
	head = invention["head"];
	text = invention["text"];
	
	display = createP(head);	
	display.position(0,100);
	display.style("font-family: 'Merriweather', serif");
	display.style("font-weight: bold");
	display.style("padding", "100px");
	display.style("font-size", "24pt");


	
	display = createP(text);
	display.position(0,180);
	display.style("font-family: 'Open Sans', sans-serif");
	display.style("width", "500px");
	display.style("padding", "100px");
	display.style("font-size", "14pt");
	
	
	
}


