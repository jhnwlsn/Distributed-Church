// --------------------------------------
//  Base Functions
// --------------------------------------

// ----- Draw Function ----- //

function draw(orientation, color) {
  context.beginPath();
  for (var i = 0; i < 3; i++) {
    if (i == 0) {
      context.fillStyle = 'rgba('+ color["r"] +', '+ color["g"] +', '+ color["b"] +', 1)';
    } else if (i == 1) {
      context.fillStyle = 'rgba('+ color["r"] +', '+ color["g"] +', '+ color["b"] +', 0.75)';
    } else {
      context.fillStyle = 'rgba('+ color["r"] +', '+ color["g"] +', '+ color["b"] +', 0.5)';
    }
    points(orientation);
  }
};

function points(orientation) {
  for (var i = 0; i <= canvas.width; i+=(canvas.width / 4)) {
    if (i === 0) {
      context.moveTo(i, randomNumber(150, 300));
    } else {
      context.lineTo(i, randomNumber(150, 300));
    }
  }
  context.lineTo(canvas.width, canvas.height);
  context.lineTo(0, canvas.height);
  context.closePath();
  context.fill();
};

// ----- Random number generator ------ //

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// --------------------------------------
//  Implementation
// --------------------------------------

var gray = {r: 240, g: 241, b: 242};
var red = {r: 229, g: 65, b: 59};

var mountains = document.getElementsByClassName("polygons");
for (var i = 0; i < mountains.length; i++) {
  var canvas = mountains[i];
  var context = canvas.getContext('2d');

  canvas.height = 300;
  canvas.width = 2880;

  draw("horizontal", gray);
}
