var array = [2, 19, 24, 35, 40, 47, 52, 63, 77, 85, 91]
var index = [0,1,2,3,4,5,6,7,8,9,10,11]
var direction = "right";
var act_count = 0;


var dw = screen.width
var backgroundColor;
var isOverRight;
var isOverLeft;

var bsize = 85
var bspace = 60
var numnum = 11

var lowind = 0
var highind = 10
var midp = 5
var keyVal = 52

// let img;
// function preload() {
//   img = loadImage('/Users/francesca_song/Desktop/codebase/p5/empty-example/young.jpg');
// }

function setup() {
  // put setup code here
  // called once
  createCanvas(displayWidth, displayHeight);

  noStroke();
  fill(250,175,200, 255);
  textSize(45);
  textAlign(CENTER);
  text("Binary Search", dw/2, 100);
  fill(110);
  rect(dw/2-135, 100+15, 270, 2);

  //Display target key
  fill(110);
  textSize(25);
  text("Search for " + keyVal + "!", dw/2, 100+80);
  
}

//let value = 0;


function drawOneRect(i) {
  noStroke();
  fill(250,175,200, 255);
  var x = dw - 1128 + (3 / 2) * i * bspace;
  rect(x , 270, bsize, bsize, bsize/4);
  fill(90);
  textAlign(LEFT);
  textSize(15);
  text(index[i], x + 1, 268);
  textAlign(CENTER, CENTER);
  textSize(35);
  text(array[i], x + 43, 315);
}

function drawYoung(i) {
  noStroke();
  var x = dw - 1128 + (3 / 2) * i * bspace;
  rect(x , 270, bsize, bsize, bsize/4);
  fill(90);
  textAlign(LEFT);
  textSize(15);
  text(index[i], x + 1, 268);
  image(img, x, 270, bsize, bsize);
}

function shadeB(i) {
  noStroke();
  fill(90);
  var x = dw - 1128 + (3 / 2) * i * bspace;
  rect(x , 270, bsize, bsize, bsize/4);
  textAlign(LEFT);
  textSize(15);
  text(index[i], x + 1, 268);
}

var SPACING = 20;
var BUTTON_WIDTH = 180;
var BUTTON_HEIGHT = 60;
var R_BTN_X = dw/2 + SPACING;
var L_BTN_X = dw/2 - BUTTON_WIDTH - SPACING;
var BUTTON_Y = 500;


function drawButtons() {
  noStroke();
 
  textSize(30);

  rectMode(CORNER);

  // Right 
  //check if mouse is in side the rect.
  // mouseX >= x && mouseX <= x+BUTTON_WIDTH && mouseY >= BUTTON_Y && mouseY <= BUTTON_Y + BUTTON_HEIGHT 
  if (mouseX >= R_BTN_X && mouseX <= R_BTN_X + BUTTON_WIDTH && mouseY >= BUTTON_Y && mouseY <= BUTTON_Y + BUTTON_HEIGHT) {
   // mouseX <= R_BTN_X + BUTTON_WIDTH) {
    isOverRight = true;
  } else {
    isOverRight = false;
  }
  
  if (isOverRight == true) {
    //console.log("isOverButton T")
    fill(150);
    cursor(HAND);
  } else {
    //console.log("isOverButton is F")
    fill(90);
    cursor(ARROW);
  }
  rect(R_BTN_X, BUTTON_Y, BUTTON_WIDTH, BUTTON_HEIGHT, 10);

  fill(255);
  textAlign(CENTER, CENTER);
  text("Go RIGHT", dw/2 + SPACING + BUTTON_WIDTH/2, BUTTON_Y+BUTTON_HEIGHT/2);

  // Left
  //check if mouse is in side the rect.
  // mouseX >= x && mouseX <= x+BUTTON_WIDTH && mouseY >= BUTTON_Y && mouseY <= BUTTON_Y + BUTTON_HEIGHT 
  if (mouseX >= L_BTN_X && mouseX <= L_BTN_X + BUTTON_WIDTH && mouseY >= BUTTON_Y && mouseY <= BUTTON_Y + BUTTON_HEIGHT) {
   // mouseX <= R_BTN_X + BUTTON_WIDTH) {
    isOverLeft = true;
  } else {
    isOverLeft = false;
  }

  if (isOverLeft == true) {
    //console.log("isOverButton is T")
    fill(150);
    cursor(HAND);
  } else {
    //console.log("isOverButton is F")
    fill(90);
    cursor(ARROW);
  }
  
  rect(L_BTN_X, BUTTON_Y, BUTTON_WIDTH, BUTTON_HEIGHT, 10);

  fill(255);
  textAlign(CENTER, CENTER);
  text("Go LEFT", dw/2 - SPACING - BUTTON_WIDTH/2, BUTTON_Y+BUTTON_HEIGHT/2);

  //annotation below buttons
  fill(160);
  textSize(20);
  text("Discard Right", dw/2 - SPACING - BUTTON_WIDTH/2, BUTTON_Y + 90);
  text("Discard Left", dw/2 + SPACING + BUTTON_WIDTH/2, BUTTON_Y + 90);
}


function mousePressed() {

  if (isOverLeft) {
    //clicked left
    console.log("left")
    if (direction == "left") {
      act_count += 1;
    } else {
      alert("Try again!");
    }
  }

  if (isOverRight) {
    console.log("right")
    if (direction == "right"){
      act_count += 1;
    } else {
      alert("Try again!");
    }
  }
}

// order of the actual binary process
  //first action (mid = 47, highlight ind 6 --> 10)
function firstAct(i) {

  console.log("firstAct");
  if (i <= 5) {
    //drawYoung(i);
    shadeB(i);
  } else {
    drawOneRect(i);
  }

  // lowind = 6;
  // highind = 10;
  // midp = 8;
  direction = "left";
}

  //second action (mid = 77, highlight ind 6 --> 7)
function secAct(i) {

  if (i <= 5 || i >= 8 ) {
    //drawYoung(i);
    shadeB(i);
  } else {
    drawOneRect(i);
  }

  dOne();

//   lowind = 6;
//   highind = 7;
//   midp = 6;
}

//Congrats
function dOne() {
  fill(250,175,200, 255);
  textSize(30);
  textAlign(CENTER);
  text("You found " + keyVal + "!", dw/2, 450);
}

//update
function draw() {
  drawButtons()
  var i;
  for (i = 0; i < array.length; i++) {
    if (act_count == 0) {
      drawOneRect(i);
      fill(90);
      triangle(620, 327 + bsize, 640, 275 + bsize, 660, 327 + bsize);
    }

    if (act_count == 1) {
      firstAct(i);
      fill(255);
      rect(620, 275 + bsize, 40, 52);
      fill (90);
      triangle(895, 327 + bsize, 915, 275 + bsize, 935, 327 + bsize);
    }

    if (act_count == 2) {
      secAct(i);
      fill(255);
      rect(895, 275 + bsize, 40, 52);
      fill(90);
      triangle(710, 327 + bsize, 730, 275 + bsize, 750, 327 + bsize);
    }
  }
}

  