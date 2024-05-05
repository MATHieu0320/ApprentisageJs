const canva = document.getElementById("art");
const ctx = canva.getContext("2d");

ctx.fillStyle = "rgb(200,0,0)";

function getMousePos(e) {
  const rect = canva.getBoundingClientRect();

  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}
//

function MousemoveFunction(e) {
  const valeur = getMousePos(e);
  // moveTo le premier x point de depart horizontal et y pt de depart vertical
  ctx.lineTo(valeur.x, valeur.y);
  ctx.stroke();
  ctx.strokeStyle = "salmon";
  ctx.lineWidth = 8;
}

canva.addEventListener("mousedown", (e) => {
  e.preventDefault();

  const valeur = getMousePos(e);
  ctx.beginPath();
  // moveTo le premier x point de depart horizontal et y pt de depart vertical
  ctx.moveTo(valeur.x, valeur.y);

  canva.addEventListener("mousemove", MousemoveFunction);
  canva.addEventListener("mouseup", () => {
    canva.removeEventListener("mousemove", MousemoveFunction);
  });
  reset.addEventListener("click", () => {
    ctx.clearRect(0, 0, canva.width, canva.height);
  });
});
