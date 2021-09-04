"use strict"

//Creamos el Canvas, le dimos un contexto con un widht y con height
let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
let width = 500;
let height = 500;
let imageData = ctx.createImageData(width, height);

let r = 255;
let g = 255;
let b = 255;
let a = 255;

//Dibujamos el rectangulo
function drawReact(imageData, r, g, b, a) {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            setPixel(imageData, x, y, r, g, b, a);
        }
    }
}

function setPixel(imageData, x, y, r, g, b, a){
    let index = (x + y * imageData.widht)*4;
    imageData.data[index+0]= r;
    imageData.data[index+1]= g;
    imageData.data[index+2]= b;
    imageData.data[index+3]= a;
}

drawReact(imageData, r, g, b, a);
ctx.putImageData(imageData, 0, 0);