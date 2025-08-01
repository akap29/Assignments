let canvas = document.getElementById("canvas");
let circles = [];
let redoStack = [];
updateButtonStates();

function draw(e) {
  const x = e.clientX;
  const y = e.clientY;
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.left = `${x - 10}px`;
  circle.style.top = `${y - 10}px`;
    circle.style.backgroundColor=getRandomColor();
  canvas.appendChild(circle);
  circles.push(circle);
  redoStack = [];
}

function undo() {
  if (circles.length > 0) {
    const last = circles.pop();
    redoStack.push(last);
    last.remove();
  }
}

function redo() {
  if (redoStack.length > 0) {
    const circle = redoStack.pop();
    canvas.appendChild(circle);
    circles.push(circle);
  }
}

function reset() {
  circles.forEach(c => c.remove());
  circles = [];
  redoStack = [];
}
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function updateButtonStates(){
    document.getElementById("undoBtn").Disabled=circles.length===0;
    document.getElementById("resetBtn").Disabled=circles.length===0;
    document.getElementById("redoBtn").Disabled=redoStack.length===0;
}