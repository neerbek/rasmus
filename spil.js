const canvas = document.getElementById('myCanvas');
canvas.width = 600;
canvas.height = 400;
// adding comment

let x = 20;
const maxX = 250;

function fars() {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 300, 300); // clear canvas

  ctx.fillStyle = '#FF0000';
  ctx.fillRect(x, 40, 50, 50);
  x += 1;
  if (x > maxX) { x = 20; }

  ctx.fillStyle = '#00FF00';
  ctx.fillRect(80, 40, 50, 50);

  ctx.strokeStyle = '#00FF00';
  ctx.strokeStyle = 'red';
  ctx.strokeRect(20, 30, 100, 100);



  ctx.fillStyle = '#0000FF';
  ctx.fillRect(20, 100, 50, 50);

  requestAnimationFrame(fars);
}

requestAnimationFrame(fars);
