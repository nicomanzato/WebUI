const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const drawCircle = (posX, posY, radius, startAngle, endAngle, color = "blue", canvasId) => {
  let canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(posX, posY, radius, startAngle, endAngle);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}

const drawRectangle = (posX, posY, width, height, color = "red", canvasId) => {
  let canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.rect(posX, posY, width, height);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}

const setCanvasBackground = (canvasId, color) => {
  let canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

const drawRandomElements = (canvasId) => {
  let randomCanvas = document.getElementById(canvasId);
  drawCircle(getRandomInt(randomCanvas.width),getRandomInt(randomCanvas.height),getRandomInt(90),0,2*Math.PI, getRandomColor(), "randomCanvas");
  drawCircle(getRandomInt(randomCanvas.width),getRandomInt(randomCanvas.height),getRandomInt(90),0,2*Math.PI, getRandomColor(), "randomCanvas");
  drawCircle(getRandomInt(randomCanvas.width),getRandomInt(randomCanvas.height),getRandomInt(90),0,2*Math.PI, getRandomColor(), "randomCanvas");

  drawRectangle(getRandomInt(randomCanvas.width), getRandomInt(randomCanvas.height), getRandomInt(randomCanvas.width / 2), getRandomInt(randomCanvas.height / 2), getRandomColor(), "randomCanvas");
}

const drawAnimatedRectangle = (posX, posY, width, height, color, canvasId) => {

  let canvas = document.getElementById(canvasId);
  let ctx = canvas.getContext("2d");

  setInterval( () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCanvasBackground("animatedCanvas", "white");
    posX = (posX + 10) % canvas.width;
    drawRectangle(posX, posY, width, height, color, canvasId);

  }, 15);

}

window.addEventListener("load",() => {
  // Setting canvas background to white
  setCanvasBackground("randomCanvas", "white");
  setCanvasBackground("animatedCanvas", "white");

  // Drawing elements into canvas.
  drawRandomElements("randomCanvas");

  drawAnimatedRectangle(getRandomInt(randomCanvas.width), getRandomInt(randomCanvas.height), getRandomInt(randomCanvas.width / 2), getRandomInt(randomCanvas.height / 2), getRandomColor(),"animatedCanvas");
});
