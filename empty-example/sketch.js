function setup() {
  // put setup code here
  // called once
}

let value = 0;
function draw() {
  // put drawing code here
  fill(value);
  ellipse(random(, random(), random(30,70), random(30,70));
}

function mouseClicked() {
	if (value === 0) {
		value = color(random(255), random(255), random(255));
	} else {
		value = 0;
	}
}
