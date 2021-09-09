"use strict"

//Creamos el contexto para el Canvas
let ctx = document.querySelector("#myCanvas").getContext("2d");
let widht = 700;
let height = 450;
let imageData = ctx.createImageData(widht, height);
/*Me dice el punto de coordenadas, el left y el top con respecto a la pantalla donde
esta el canvas*/
let rect = myCanvas.getBoundingClientRect();
let x=0, y=0, dibujando=false, color='black', grosor=1; 

//Asignamos las varibles para RGBA
let r = 255;
let g = 255;
let b = 255;
let a = 200;

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

/*Parte de lapiz, con grosor y color.*/
function defColor(colorSolicitado){
    color = colorSolicitado;
}

function defGrosor(grosorSolicitado){
    grosor = grosorSolicitado;
}

/*Con este evento le indico que esta dibujando y le doy las coordenadas Y e X*/
myCanvas.addEventListener('mousedown', function(e){
   x = e.clientX - rect.left;
   y = e.clientY - rect.top;
   dibujando = true;
});

/*Con este evento le indico el movimiento, donde por la funcion anonima le indico los 
lugares que esta trazando el cliente, comienza a dibujar*/
myCanvas.addEventListener('mousemove', function(e){
  //Ponemos triple igual para que se iguale en valor y tipo.  
  if(dibujando === true){
    dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

/*Este evento sirve para cuando se deja de sostener el mouse */
myCanvas.addEventListener('mouseup', function(e){
  if(dibujando === true){
    dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
    x=0;
    y=0;
    dibujando = false;
  }
});

/**Creamos la funcion dibujar */
function dibujar(x, y, x1, y1){
  //Dibuja una nueva ruta
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = grosor;
  //Doy punto inicial y final del trazo
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  //Le marco que es una linea
  ctx.stroke();
  ctx.closePath();
}