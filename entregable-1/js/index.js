"use strict"

//Creamos el contexto para el Canvas
let ctx = document.querySelector("#mycanvas").getContext("2d");
let widht = 500;
let height = 500;
let imageData = ctx.createImageData(widht, height);

//Asignamos las varibles para RGBA
let r = 0;
let g = 0;
let b = 0;
let a = 255;

//Recorremos la Matriz
for (let x = 0; x < widht; x++) {
  for (let y = 0; y < height; y++) {
    setPixel(imageData, x, y, r, g, b, a);
  }
}
ctx.putImageData(imageData, 0, 0);

function setPixel(imageData, x, y, r, g, b, a) {
  let index = (x + y * imageData.width) * 4;

  imageData.data[index + 0] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
  imageData.data[index + 3] = a;
}