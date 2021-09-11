"use strict"

//Creamos el contexto para el Canvas
let ctx = document.querySelector("#myCanvas").getContext("2d");
let widht = 700;
let height = 450;
let imageData = ctx.createImageData(widht, height);
/*Me dice el punto de coordenadas, el left y el top con respecto a la pantalla donde
esta el canvas*/
let rect = myCanvas.getBoundingClientRect();
let x=0, y=0, dibujando=false; 

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

//Utilizamos estos eventos para "escuchar" al color y al grosor

let color="black";
  document.querySelector("#color").addEventListener("change", changeColor);
  
  function changeColor(e) {
    color = e.target.value;
    ctx.strokeStyle = color;
  };

  let grosor=1;
  document.querySelector("#grosor").addEventListener("change", changeGrosor);
  
  function changeGrosor(e) {
    grosor = e.target.value;
    ctx.lineWidth = grosor;
  };

//Este evento escucha al lapiz
document.querySelector("#lapiz").addEventListener('click', lapiz);

//la funcion lapiz() define el grosor y color que tendra el lapiz
function lapiz() {
  ctx.lineWidth = grosor;
  ctx.strokeStyle = color;
}; 

document.querySelector("#borrar").addEventListener("click", borrar);

function borrar() {
  ctx.lineWidth = grosor;
  ctx.strokeStyle = "#FFFF";
};

/**Creamos la funcion dibujar */
function dibujar(x, y, x1, y1){
  ctx.beginPath();
  //Doy punto inicial y final del trazo
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  //Le marco que es una linea
  ctx.stroke();
  ctx.closePath();
}

//Cargar imagen

document.querySelector("#image").addEventListener("change", cargarImage);
let content;
let image;
let imageWidth;
let imageHeight;

function cargarImage(e) {
  let file = e.target.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (readerEvent) => {
    content = readerEvent.target.result;
    image = new Image();

    imageLoad();
  };
};


function imageLoad() {
  image.src = content;

  image.onload = function () {
    imageHeight = myCanvas.height;
    imageWidth = myCanvas.height;
    myCanvas.width = imageWidth;
    ctx.drawImage(this, 0, 0, imageWidth, imageHeight);
    imageData = ctx.getImageData(0, 0, imageWidth, imageHeight);
    ctx.putImageData(imageData, 0, 0);
    lapiz();
  }
};

/*Ejercicio 3 
  Filtros negativo, brillo, binarizacion y sepia
*/

document.querySelector('#negativo').addEventListener('click', negativo);

//Esta funcion le aplica el filtro negativo a la imagen
function negativo() {
  image.onload();

  for (let y = 0; y < imageData.height; y++) {
    for (let x = 0; x < imageData.width; x++) {
      let index = (x + imageData.width * y) * 4;
      
      //invertimos los colores de cada pixel
      let r = imageData.data[index + 0];
      let g = imageData.data[index + 1];
      let b = imageData.data[index + 2];

      imageData.data[index + 0] = 255 - r;
      imageData.data[index + 1] = 255 - g;
      imageData.data[index + 2] = 255 - b;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

document.querySelector('#brillo').addEventListener('click', brillo);

//Esta funcion le aplica el filtro brillo a la imagen
function brillo() {
  for (let y = 0; y < imageData.height; y++) {
    for (let x = 0; x < imageData.width; x++) {
      let index = (x + imageData.width * y) * 4;

      let r = imageData.data[index + 0];
      let g = imageData.data[index + 1];
      let b = imageData.data[index + 2];

      imageData.data[index + 0] = r + 50;
      imageData.data[index + 1] = g + 50;
      imageData.data[index + 2] = b + 50;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

document.querySelector('#binarizacion').addEventListener('click', binarizacion);

//En esta funcion aplicamos el filtro de binarizacion
function binarizacion() {
  image.onload();
  for (let y = 0; y < imageData.height; y++) {
    for (let x = 0; x < imageData.width; x++) {
      let index = (x + imageData.width * y) * 4;

      let r = imageData.data[index + 0];
      let g = imageData.data[index + 1];
      let b = imageData.data[index + 2];

      let rgb = (r + g + b);

       if (rgb/3 > 255/3)
        rgb = 255;
      else
        rgb = 0;

      imageData.data[index + 0] = rgb;
      imageData.data[index + 1] = rgb;
      imageData.data[index + 2] = rgb;
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

document.querySelector('#sepia').addEventListener('click', sepia);

//En esta funcion aplicamos el filtro sepia
function sepia() {
  image.onload();

  for (let y = 0; y < imageData.height; y++) {
    for (let x = 0; x < imageData.width; x++) {
      let index = (x + imageData.width * y) * 4;

      let r = imageData.data[index + 0];
      let g = imageData.data[index + 1];
      let b = imageData.data[index + 2];

      imageData.data[index + 0] = ( r * .393 ) + ( g *.769 ) + ( b * .189 );
      imageData.data[index + 1] = ( r * .349 ) + ( g *.686 ) + ( b * .168 );
      imageData.data[index + 2] = ( r * .272 ) + ( g *.534 ) + ( b * .131 );
    }
  }
  ctx.putImageData(imageData, 0, 0);
};


document.querySelector("#descargar").addEventListener("click", descargar);

//Descargar imagen  
function descargar() {
  image = myCanvas.toDataURL("image/jpg");
  this.href = image;
};

document.getElementById("limpiar").addEventListener("click", limpiar);

//Comenar un lienzo en blanco 
function limpiar(){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}