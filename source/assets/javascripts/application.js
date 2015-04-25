// Look mom! Really bad javascript!

var canvas = document.getElementById("hero-mountains");
var context = canvas.getContext('2d');

canvas.height = 300;
canvas.width = 2880;

context.beginPath();
context.moveTo(0, Math.floor(Math.random() * 110) + 190);
context.lineTo(720, Math.floor(Math.random() * 110) + 190);
context.lineTo(1440, Math.floor(Math.random() * 110) + 190);
context.lineTo(2160, Math.floor(Math.random() * 110) + 190);
context.lineTo(2880, Math.floor(Math.random() * 110) + 190);
context.lineTo(2880, 400);
context.lineTo(0, 400);
context.closePath();
context.fillStyle = 'rgba(240, 241, 242, 1)';
context.fill();

context.beginPath();
context.moveTo(0, Math.floor(Math.random() * 200) + 50);
context.lineTo(720, Math.floor(Math.random() * 200) + 50);
context.lineTo(1440, Math.floor(Math.random() * 200) + 50);
context.lineTo(2160, Math.floor(Math.random() * 200) + 50);
context.lineTo(2880, Math.floor(Math.random() * 200) + 50);
context.lineTo(2880, 400);
context.lineTo(0, 400);
context.closePath();
context.fillStyle = 'rgba(240, 241, 242, 0.75)';
context.fill();

context.beginPath();
context.moveTo(0, Math.floor(Math.random() * 200));
context.lineTo(720, Math.floor(Math.random() * 200));
context.lineTo(1440, Math.floor(Math.random() * 200));
context.lineTo(2160, Math.floor(Math.random() * 200));
context.lineTo(2880, Math.floor(Math.random() * 200));
context.lineTo(2880, 400);
context.lineTo(0, 400);
context.closePath();
context.fillStyle = 'rgba(240, 241, 242, 0.5)';
context.fill();
