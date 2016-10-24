//keyboard swipe alpabet
//

var display;

var head;
var text;
var stat;
var load = 0;
var next = 0;
var fade = 0;
var time = 0;
var decay = 0;
var click = false;
var id = 0;
var first = false;

var ease = 1;

function setup() {
	
}


function draw() {

	var invent_button = document.getElementById("invent_button");
	var submit_button = document.getElementById("submit");
	var display = document.getElementById("display_invention");
	var loading = document.getElementById("display_loading");
	var intro = document.getElementById("introduction");
	
	invent_button.addEventListener("click", clickEvent);
	submit_button.addEventListener("click", submitEvent);
	
	if(click){
		next++;
		
		if(next < 20 && first == true){
			display.style.display = "block";
			display.style.opacity = 1-next*0.06;
		}
		
		if(next < 30 && first == false){
			ease =+ 1.075*ease;
			intro.style.opacity = 1-next*0.08;
			intro.style.height = 200-next*ease;
			intro.style.marginTop = 200-next*ease;
		}
		
		if(next > 35){
			intro.style.display = "none";
			loading.style.display = "block";
			loading.style.opacity = load*0.05;
			
			if(load == 10){
				loadJSON("data/inventions_1000.json", drawData);
			}
			
			if(load > time) {
				decay++;
				loading.style.opacity = 1-decay*0.06;
			}
			
			if(load > time+30){	
					
				if(fade > 20){						
					click = false;
					first = true;
					load = 0;
					next = 0;
					decay = 0;			
				}	
				loading.style.display = "none";
				loading.style.opacity = "0";
				display.style.display = "block";
				display.style.opacity = fade*0.05;
				fade ++;
			}else{			
				display.style.display = "none";
				display.style.opacity = "0";
				fade = 0;
			}
			load++;
		}
		
	}
}

function clickEvent() {
	id = int(random(20));
	time = random(100,400);
	click = true;		
}

function submitEvent() {
	
}	


function drawData(data){
	
	var h_head = document.getElementById("head");
	var h_text = document.getElementById("text");
	var invention = data[id];
	head = invention["head"];
	text = invention["text"];
	
	h_head.innerHTML = head;
	h_text.innerHTML = text;	
	
	$('meta[property="og:title"]').remove();
	$('meta[property="og:description"]').remove();
	$("head").append('<meta property="og:title" content="'+head+'">');
	$("head").append('<meta property="og:description" content="'+text+'">');
}


