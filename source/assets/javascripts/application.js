window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000/ 60);
  }
})();

function animate(length, duration) {
  // 1. Define canvas and context
  // 2. Clear
  context.clearRect(0, 0, canvas.width, canvas.height);
  // 3. Update
  // 4. Draw
  // 5. Start all over (request new frame)
  requestAnimFrame(function() {
    animate();
  });
};

function drawMountain(context) {
  context.beginPath();
  for (var i = 0; i <= canvas.width; i += (canvas.width / 4) ) {
    if (i == 0) {
      context.moveTo(i, randomNumber(125, 300));
    } else {
      context.lineTo(i, randomNumber(125, 300));
    }
  }
  context.lineTo(canvas.width, canvas.height);
  context.lineTo(0, canvas.height);
  context.closePath();
  context.fillStyle = 'rgba(240, 241, 242, 1)';
  context.fill();
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// =================================
//  Implementation
// =================================

var mountains = document.getElementsByClassName("mountains");
for (var i = 0; i < mountains.length; i++) {
  var canvas = mountains[i];
  var context = canvas.getContext('2d');

  canvas.height = 300;
  canvas.width = 2880;

  drawMountain(context);
}
