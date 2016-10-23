//keyboard swipe alpabet
//

var display;

var head;
var text;
var stat;
var load = 0;
var fade = 0;
var time = 0;
var click = false;

function setup() {
	
}


function draw() {

	var invent_button = document.getElementById("invent_button");
	invent_button.addEventListener("click", doSomething);
	var display = document.getElementById("display_invention");
	var loading = document.getElementById("display_loading");
	
	if(click){
		
		console.log(load);
		loading.style.display = "block";
		loading.style.opacity = "1";
		
		if(load > time){	
				
			if(fade > 20){						
				click = false;
				load = 0;
			}	
			loading.style.opacity = "0";
			display.style.display = "block";
			display.style.opacity = fade*0.05;
			fade ++;
		}else{
			display.style.display = "none";
			display.style.opacity = "0";
			fade = 0;
			loadJSON("data/inventions_small.json", drawData);
		}
		load++;
	}
}

function doSomething() {
	time = random(100,400);
	click = true;	
}

	



function drawData(data){
	
	var h_head = document.getElementById("head");
	var h_text = document.getElementById("text");
	var p_stat = document.getElementById("stat");
	
	
	var number = int(random(33));	
	var invention = data[number];
	head = invention["head"];
	text = invention["text"];
	stat = invention["meening"];
	
	h_head.innerHTML = head;
	h_text.innerHTML = text;

	p_stat.innerHTML = stat;
}


