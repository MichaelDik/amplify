// Add this script at the end of your HTML file or in a JS file
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomColor() {
  const colors = ['#ff0a54','#ff477e','#ff7096','#ff85a1','#fbb1bd','#f9bec7','#f7cad0','#b5ead7','#caffbf','#9bf6ff','#a0c4ff','#bdb2ff','#ffc6ff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function ConfettiParticle() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * -canvas.height;
  this.r = Math.random() * 6 + 4;
  this.d = Math.random() * 50 + 50;
  this.color = randomColor();
  this.tilt = Math.floor(Math.random() * 10) - 10;
  this.tiltAngleIncremental = (Math.random() * 0.07) + .05;
  this.tiltAngle = 0;

  this.draw = function() {
    ctx.beginPath();
    ctx.lineWidth = this.r;
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x + this.tilt + (this.r / 3), this.y);
    ctx.lineTo(this.x + this.tilt, this.y + this.tilt + this.r);
    ctx.stroke();
  }
}

let particles = [];
function createConfetti() {
  particles = [];
  for (let i = 0; i < 150; i++) {
    particles.push(new ConfettiParticle());
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    p.draw();
    p.y += Math.cos(p.d) + 1 + p.r / 2;
    p.x += Math.sin(0) * 2;
    p.tiltAngle += p.tiltAngleIncremental;
    p.tilt = Math.sin(p.tiltAngle) * 15;

    if (p.y > canvas.height) {
      p.x = Math.random() * canvas.width;
      p.y = -10;
    }
  }
}

let confettiInterval;
document.getElementById('confetti-btn').onclick = function() {
  createConfetti();
  clearInterval(confettiInterval);
  confettiInterval = setInterval(() => {
    drawConfetti();
  }, 16);
  setTimeout(() => {
    clearInterval(confettiInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 2000);
};

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});