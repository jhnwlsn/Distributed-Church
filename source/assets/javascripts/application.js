// --------------------------------------
//  Base Functions
// --------------------------------------

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  draw();
};

// ----- Draw Function ----- //

function draw() {
  context.beginPath();
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
  context.fillStyle = 'rgba(240, 241, 242, 1)';
  context.fill();

  context.beginPath();
  for (var i = 0; i <= canvas.width; i+=(canvas.width / 4)) {
    if (i === 0) {
      context.moveTo(i, randomNumber(100, 250));
    } else {
      context.lineTo(i, randomNumber(100, 250));
    }
  }
  context.lineTo(canvas.width, canvas.height);
  context.lineTo(0, canvas.height);
  context.closePath();
  context.fillStyle = 'rgba(240, 241, 242, 0.75)';
  context.fill();

  context.beginPath();
  for (var i = 0; i <= canvas.width; i+=(canvas.width / 4)) {
    if (i === 0) {
      context.moveTo(i, randomNumber(50, 200));
    } else {
      context.lineTo(i, randomNumber(50, 200));
    }
  }
  context.lineTo(canvas.width, canvas.height);
  context.lineTo(0, canvas.height);
  context.closePath();
  context.fillStyle = 'rgba(240, 241, 242, 0.5)';
  context.fill();
};

// ----- Random number generator ------ //

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

// --------------------------------------
//  Implementation
// --------------------------------------

var mountains = document.getElementsByClassName("mountains");
for (var i = 0; i < mountains.length; i++) {
  var canvas = mountains[i];
  var context = canvas.getContext('2d');

  canvas.height = 300;
  canvas.width = 2880;

  draw()
  setInterval(animate, 3000);

}
