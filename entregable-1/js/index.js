"use strict"

//Creamos el contexto para el Canvas
let myCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");
let widht = 700;
let height = 390;
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
document.querySelector("#image-button").addEventListener("click", cargarImage);
let content;
let image;
let imageAspectRatio;
let imageScaledWidth;
let imageScaledHeight;

function cargarImage(e) {
  let file = document.getElementById("inputImg").files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = (readerEvent) => {
    content = readerEvent.target.result;
    image = new Image(); 
    imageLoad();
  };
};


function imageLoad() {

  image.onload = function () {
    imageAspectRatio = (1.0 * this.width) / this.height;
    imageScaledHeight = myCanvas.height;
    imageScaledWidth = myCanvas.height * imageAspectRatio;
    myCanvas.width = imageScaledWidth;
    ctx.drawImage(this, 0, 0, imageScaledWidth, imageScaledHeight);
    imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);
    ctx.putImageData(imageData, 0, 0);
    lapiz();
  }

  image.src = content;
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


//document.getElementById('limpiar').addEventListener('click', imgLoad);

document.getElementById("limpiar").addEventListener("click", limpiar);

//Comenzar un lienzo en blanco 
function limpiar(){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
}

document.querySelector('#saturacion').addEventListener('click', saturacion);

//En esta funcion aplicamos el filtro saturacion
function saturacion() {
  image.onload();

  for (let y = 0; y < imageData.height; y++) {
    for (let x = 0; x < imageData.width; x++) {
      let index = (x + imageData.width * y) * 4;

      let contraste = 100;
      let factor = (259 * (contraste + 255)) / (255 * (259 - contraste));
      
      let r = imageData.data[index + 0];
      let g = imageData.data[index + 1];
      let b = imageData.data[index + 2];
      
      imageData.data[index + 0] = factor * (r-128) +128;
      imageData.data[index + 1] = factor * (g-128) +128;
      imageData.data[index + 2] = factor * (b-128) +128;
    }
  }
  ctx.putImageData(imageData, 0, 0);
};

document.querySelector('#blur').addEventListener('click', blur);

  function blur() {

    let imageData = ctx.getImageData(0 , 0, imageScaledWidth, imageScaledHeight);
    let r,g,b,a=255;

    for (let y = 0; y < imageData.height; y++) {
      for (let x = 0; x < imageData.width; x++) {
        r = promedioR(imageData, x, y);
        g = promedioG(imageData, x, y);
        b = promedioB(imageData, x, y);

        setPixel(imageData, x, y, r, g, b, a);
      }
    }
    ctx.putImageData(imageData, 0, 0);
  };

  function getIndex(imageData, x, y) {
    let index = (x + y * imageData.width) * 4;
    return index;
  }

 function promedioR(imageData, x, y){
   //Valores de la primera fila
   let pixel0= imageData.data[getIndex(imageData, x-1, y-1) + 0]; 
   let pixel1= imageData.data[getIndex(imageData, x, y-1)+0];
   let pixel2= imageData.data[getIndex(imageData, x+1, y-1)+0];

   //Valores de la segunda fila
   let pixel3= imageData.data[getIndex(imageData, x-1, y)+0];
   let pixel4= imageData.data[getIndex(imageData, x, y)+0];
   let pixel5= imageData.data[getIndex(imageData, x+1, y)+0];

   //Valores de la tercera fila
   let pixel6= imageData.data[getIndex(imageData, x-1, y+1)+0];
   let pixel7= imageData.data[getIndex(imageData, x, y+1)+0];
   let pixel8= imageData.data[getIndex(imageData, x+1, y+1)+0];

   //Obtenemos el promedio del color rojo
   let prom = (pixel0+pixel1+pixel2+pixel3+pixel4+pixel5+pixel6+pixel7+pixel8)/9;

   return prom;
 }

 function promedioG(imageData, x, y){
  //Valores de la primera fila
  let pixel0= imageData.data[getIndex(imageData, x-1, y-1) + 1]; 
  let pixel1= imageData.data[getIndex(imageData, x, y-1)+1];
  let pixel2= imageData.data[getIndex(imageData, x+1, y-1)+1];

  //Valores de la segunda fila
  let pixel3= imageData.data[getIndex(imageData, x-1, y)+1];
  let pixel4= imageData.data[getIndex(imageData, x, y)+1];
  let pixel5= imageData.data[getIndex(imageData, x+1, y)+1];

  //Valores de la tercera fila
  let pixel6= imageData.data[getIndex(imageData, x-1, y+1)+1];
  let pixel7= imageData.data[getIndex(imageData, x, y+1)+1];
  let pixel8= imageData.data[getIndex(imageData, x+1, y+1)+1];

  //Obtenemos el promedio del color Verde
  let prom = (pixel0+pixel1+pixel2+pixel3+pixel4+pixel5+pixel6+pixel7+pixel8)/9;

  return prom;
}

function promedioB(imageData, x, y){
  //Valores de la primera fila
  let pixel0= imageData.data[getIndex(imageData, x-1, y-1) + 2]; 
  let pixel1= imageData.data[getIndex(imageData, x, y-1)+2];
  let pixel2= imageData.data[getIndex(imageData, x+1, y-1)+2];

  //Valores de la segunda fila
  let pixel3= imageData.data[getIndex(imageData, x-1, y)+2];
  let pixel4= imageData.data[getIndex(imageData, x, y)+2];
  let pixel5= imageData.data[getIndex(imageData, x+1, y)+2];

  //Valores de la tercera fila
  let pixel6= imageData.data[getIndex(imageData, x-1, y+1)+2];
  let pixel7= imageData.data[getIndex(imageData, x, y+1)+2];
  let pixel8= imageData.data[getIndex(imageData, x+1, y+1)+2];

  //Obtenemos el promedio del color rojo
  let prom = (pixel0+pixel1+pixel2+pixel3+pixel4+pixel5+pixel6+pixel7+pixel8)/9;

  return prom;
}