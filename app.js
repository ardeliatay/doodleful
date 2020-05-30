window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext('2d');

  let drawing = false;

  function startPosition() {
    drawing = true;
    draw(e);
  }

  function stopPosition() {
    drawing = false;
    context.beginPath();
  }

  function draw(e) {
    if (!drawing) return;
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = document.querySelector("#colorPicker").value;

    // Draws a line from the current drawing position to the position specified by x and y
    context.lineTo(e.layerX, e.layerY);
    // Draws the shape
    context.stroke();
    // Creates a new path
    context.beginPath();
    // Moves the pen to the coordinates specified by x and y
    context.moveTo(e.layerX, e.layerY);
  }

  canvas.addEventListener('mousedown', startPosition)
  canvas.addEventListener('mouseup', stopPosition)
  canvas.addEventListener('mousemove', draw)
})
