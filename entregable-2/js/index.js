let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

for (let index=0; index<100; index++){
    //Elige un color al azar
    ctx.fillStyle = randomRGBA();
    ctx.beginPath();
    //Math.round es para devolver un numero entero
    //ctx.arc(centro del circulo en ancho, centro del circulo en alto, radio, de donde arranca el circulo -0, 0.5, 1, 1.5, 2- , cuanto se dibuja del circulo)
    ctx.arc(Math.round(Math.random()*width), Math.round(Math.random()*height), Math.round(Math.random()*40), 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
}

for (let index=0; index<100; index++){
    //Elige un color al azar
    ctx.fillStyle = randomRGBA();
    ctx.fillRect(Math.round(Math.random()*width), Math.round(Math.random()*height), Math.round(Math.random()*40), Math.round(Math.random()*40));
}

function randomRGBA(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}