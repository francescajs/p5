var array = [0,0,0,0,0,0,0,0,0]
var dw = screen.width

var low_ind = 0
var low_elem
var high_elem
var keyVal


//function ascendingOrder() {
  //points.sort(function(a, b){return a - b});
//
//Math.random()*(99)+1

function setup() {
  // put setup code here
  // called once
  dw = displayWidth
  createCanvas(displayWidth, displayHeight);

  noStroke();
  fill(250,175,200, 255);
  textSize(45);
  textAlign(CENTER);
  textFont('Georgia');
  text("Binary Search", dw/2, 100);
  fill(110);
  rect(dw/2-135, 100+15, 270, 2);

  //Display target key
  fill(110);
  textSize(25);
  text("Search for " + keyVal, dw/2, 100+80);

  //populate array
  var numbers = [1,2,3,4,5,6,7,8,9]

  function populate(a) {
  	for
  }


}

//let value = 0;

function draw() {
  // put drawing code here
  //fill(value);
  //ellipse(random(45, 600), random(45, 600), random(30,70), random(30,70));
}

function mouseClicked() {
	//if (value === 0) {
	//	value = color(random(255), random(255), random(255));
	//} else {
	//	value = 0;
	//}
}
