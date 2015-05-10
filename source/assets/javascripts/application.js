// --------------------------------------
//  Mobile Menu
// --------------------------------------

// ----- Function ----- //

function mobileMenu(event) {
  var close = document.getElementById('navigation-close');
  var target = event.target;
  var toggle = document.getElementById('navigation-mobile');
  var nav = document.getElementsByClassName('navigation')[0];

  if (target == toggle) {
    nav.classList.add('is-active');
    event.preventDefault();
  } else if (target == close) {
    nav.classList.remove('is-active')
    event.preventDefault();
  }
};

// ----- Implementation ----- //

window.onclick = function(event) {
  mobileMenu(event);
}

// --------------------------------------
//  Base Functions
// --------------------------------------

// ----- Draw Function ----- //

function draw(orientation, color) {
  context.beginPath();
  for (var i = 0; i < 3; i++) {
    if (i == 0) {
      context.fillStyle = 'rgba('+ color["r"] +','+ color["g"] +','+ color["b"] +',1)';

      if (orientation == "mountains") {
        mountainsPoints("small");
      } else if (orientation == "drapes") {
        drapesPoints("small");
      } else if (orientation == "vertical") {
        verticalPoints("small");
      }

    } else if (i == 1) {
      context.fillStyle = 'rgba('+ color["r"] +','+ color["g"] +','+ color["b"] +',0.75)';

      if (orientation == "mountains") {
        mountainsPoints("medium");
      } else if (orientation == "drapes") {
        drapesPoints("medium");
      } else if (orientation == "vertical") {
        verticalPoints("small");
      }

    } else {
      context.fillStyle = 'rgba('+ color["r"] +','+ color["g"] +','+ color["b"] +',0.5)';

      if (orientation == "mountains") {
        mountainsPoints("large");
      } else if (orientation == "drapes") {
        drapesPoints("large");
      } else if (orientation == "vertical") {
        verticalPoints("small");
      }

    }
  }
};

// ---- Create Points ----- //

// Drapes

function drapesPoints(size) {
  context.moveTo(canvas.width, 0);
  context.lineTo(0, 0);
  for (var i = 0; i <= canvas.width; i+=(canvas.width / 4)) {
    context.lineTo(i, size == "small" ? randomNumber(50, 200) : size == "medium" ? randomNumber(100, 250) : randomNumber(150, 300));
  }
  context.lineTo(canvas.width, canvas.height);
  context.closePath();
  context.fill();
};

// Mountains

function mountainsPoints(size) {
  for (var i = 0; i <= canvas.width; i+=(canvas.width / 4)) {
    if (i === 0) {
      context.moveTo(i, size == "small" ? randomNumber(150, 300) : size == "medium" ? randomNumber(100, 250) : randomNumber(50, 200));
    } else {
      context.lineTo(i, size == "small" ? randomNumber(150, 300) : size == "medium" ? randomNumber(100, 250) : randomNumber(50, 200));
    }
  }
  context.lineTo(canvas.width, canvas.height);
  context.lineTo(0, canvas.height);
  context.closePath();
  context.fill();
};

// Vertical

function verticalPoints(size) {
  context.moveTo(0, 0);
  for (var i = 0; i <= canvas.height; i+=(canvas.height / 3)) {
    context.lineTo(size == "small" ? randomNumber(0, 85) : size == "medium" ? randomNumber(50, 100) : randomNumber(100, 125), i);
  }
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
var teal = {r: 118, g: 195, b: 176};
var white = {r: 255, g: 255, b: 255};
var yellow = {r: 210, g: 183, b: 31};

var mountains = document.getElementsByClassName("polygons--mountains");
for (var i = 0; i < mountains.length; i++) {
  var canvas = mountains[i];
  var context = canvas.getContext('2d');

  canvas.height = 300;
  canvas.width = 2880;

  draw("mountains", gray);
}

var drapes = document.getElementsByClassName("polygons--drapes");
for (var i = 0; i < drapes.length; i++) {
  var canvas = drapes[i];
  var context = canvas.getContext('2d');

  canvas.height = 300;
  canvas.width = 2880;

  draw("drapes", white);
}

var blog = document.getElementsByClassName("polygons--blog");
for (var i = 0; i < blog.length; i++) {
  var canvas = blog[i];
  var context = canvas.getContext('2d');

  canvas.height = 760;
  canvas.width = 125;

  draw("vertical", teal);
}

var guide = document.getElementsByClassName("polygons--guides");
for (var i = 0; i < guide.length; i++) {
  var canvas = guide[i];
  var context = canvas.getContext('2d');

  canvas.height = 760;
  canvas.width = 125;

  draw("vertical", yellow);
}

// --------------------------------------
//  Background Video
//  -> References vendor.js
// --------------------------------------
var homepage = document.getElementsByClassName("index")[0];
vidbg(homepage, [
  {
    src: 'assets/videos/placeholder.mp4',
    type: 'mp4'
  }
], true);
console.log(homepage);
