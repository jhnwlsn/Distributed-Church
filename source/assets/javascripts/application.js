var mountains = document.getElementsByClassName("mountains");
for (var i = 0; i < mountains.length; i++) {
  var canvas = mountains[i];
  draw_mountain();
}

function draw_mountain() {
  var context = canvas.getContext('2d');

  canvas.height = 300;
  canvas.width = 2880;

  context.beginPath();
  for (var i = 0; i <= 2880; i += 720 ) {
    context.lineTo(i, random_number(125, 300));
  }
  context.lineTo(2880, 400);
  context.lineTo(0, 400);
  context.closePath();
  context.fillStyle = 'rgba(240, 241, 242, 1)';
  context.fill();

  context.beginPath();
  for (var i = 0; i <= 2880; i += 720 ) {
    context.lineTo(i, random_number(75, 250));
  }
  context.lineTo(2880, 400);
  context.lineTo(0, 400);
  context.closePath();
  context.fillStyle = 'rgba(240, 241, 242, 0.75)';
  context.fill();

  context.beginPath();
  for (var i = 0; i <= 2880; i += 720 ) {
    context.lineTo(i, random_number(15, 200));
  }
  context.lineTo(2880, 400);
  context.lineTo(0, 400);
  context.closePath();
  context.fillStyle = 'rgba(240, 241, 242, 0.5)';
  context.fill();
}

function random_number(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
