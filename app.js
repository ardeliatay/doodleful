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

    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }

  canvas.addEventListener('mousedown', startPosition)
  canvas.addEventListener('mouseup', stopPosition)
  canvas.addEventListener('mousemove', draw)
})
