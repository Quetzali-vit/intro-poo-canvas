const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasOOP.height = 200;
canvasOOP.width = 300;

canvasRandom.height = 200;
canvasRandom.width = 300;

canvasMultiple.height = 200;
canvasMultiple.width = 300;

// Fondo con gradiente
function drawBackground(ctx, canvas, color1, color2) {
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Agregar líneas decorativas
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
    ctx.closePath();
  }
}

// Fondo para cada lienzo
drawBackground(ctx, canvasOOP, "rgb(197, 241, 251)", "rgb(0, 191, 181)");
drawBackground(ctxRandom, canvasRandom, "rgb(170, 255, 170)", "rgb(21, 227, 59)");
drawBackground(ctxMultiple, canvasMultiple, "rgb(246, 226, 186)", "rgb(252, 130, 0)");

class Circle {
  constructor(x, y, radius, color, text, backcolor, canvas) {
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.canvas = canvas;
    this.setPosition(x, y);
  }

  setPosition(x, y) {
    this.posX = Math.min(Math.max(x, this.radius), this.canvas.width - this.radius);
    this.posY = Math.min(Math.max(y, this.radius), this.canvas.height - this.radius);
  }

  draw(context) {
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = this.color;
    context.stroke();
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "20px cursive";
    context.fillStyle = "white";
    context.fillText(this.text, this.posX, this.posY);
    context.closePath();
  }
}

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, "rgb(255, 255, 255)", "Hola", "rgb(0, 191, 181)", canvasOOP);
miCirculo.draw(ctx);

let randomRadius = Math.floor(Math.random() * 95 + 1);
let randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;
let miCirculoRandom = new Circle(randomX, randomY, randomRadius, "rgb(255, 255, 255)", "Hola", "rgb(21, 227, 59)", canvasRandom);
miCirculoRandom.draw(ctxRandom);

let arrayCircle = [];
for (let i = 0; i < 15; i++) {
  let randomRadius = Math.floor(Math.random() * 10 + 20);
  let randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
  let randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;
  let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "rgb(255, 255, 255)", i + 1, "rgb(252, 130, 0)", canvasMultiple);
  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);
}
