// CANVASS

// "user strict";
// voir plus d erreur + meilleur js
const canva = document.getElementById("canvas");
const ctx = canva.getContext("2d");
const ctx2 = canva.getContext("2d");
console.log(canva); // left haut, width, height;

function draw(params) {
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(variable++, 50, 50, 50);

  ctx.fillStyle = "rgba(0,100,200,0.5)";
  ctx.fillRect(10, 10, 100, 50);

  ctx.fillStyle = "rgba(0,100,200,0.8)";
  ctx.fillRect(100, 25, 100, 100);
  ctx.clearRect(15, 25, 40, 40);
  ctx.strokeRect(125, 75, 40, 40);
  // bordure

  // triangle;
  ctx.fillStyle = "rgba(0,10,120,1)";
  ctx.beginPath();

  // moveTo le premier x point de depart horizontal et y pt de depart vertical
  ctx.moveTo(200, 0);
  ctx.lineTo(10, 75);
  ctx.lineTo(180, 150);

  ctx.fill();
}
let variable = 10;
setInterval(() => {
  variable++;
  ctx.fillRect(100, 100, 50, variable);
}, 1000);
window.addEventListener("load", draw());

try {
  // block de code
  onti();
} catch (err) {
  console.log(err);
}

function isValidJson(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  } finally {
    console.log("est arrive à la fin");
  }
}
console.log(isValidJson(15));
// throw
function nan(number) {
  if (isNaN(number)) {
    // si ça entre dans le if alors throw se fait log par le catch en err
    throw "not a number";
  }
  // pas excute si le throw active
}

try {
  nan("5f6");
} catch (err) {
  // console.log(err);
}
