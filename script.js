const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circles = [];
for (let i = 0; i < 100; i++) {
  circles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 50,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    speed: Math.random() * 2
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = circle.color;
    ctx.fill();
    circle.x += circle.speed;
    circle.y += circle.speed;
    if (circle.x > canvas.width || circle.y > canvas.height) {
      circle.x = 0;
      circle.y = 0;
    }
  }
  requestAnimationFrame(animate);
}

animate();
