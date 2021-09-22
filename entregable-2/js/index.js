let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

const CANTFIG = 30; //Modificar para se adapte al tamaño de tablero

let figures = [];
let lastClickedFigure = null;
let isMouseDown = false;

//Carga aleatoria de figuras, modificar para que sea la que eliga el usuario
function addFigure(){
    if(Math.random()>0.5){
        addRect();
    }else{
        addCircle();
    }
    drawFigure();
}

function drawFigure(){
    clearCanvas();
    for(let i=0; i<figures.length; i++){
        figures[i].draw();
    }
}

function addRect(){
    let x = Math.round(Math.random() * width); 
    let y = Math.round(Math.random() * height); 
    let color = randomRGB();

    let rect = new Rect(x, y, 20, 20, color, ctx);
    figures.push(rect);
}

function addCircle(){
    let x = Math.round(Math.random() * width); 
    let y = Math.round(Math.random() * height); 
    let color = randomRGB();

    let circle = new Circle(x, y, 10, color, ctx);
    figures.push(circle);
}

function clearCanvas(){
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0, 0, width, height);
}

function randomRGB(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function addFigures(){
    addFigure();
    if(figures.length < CANTFIG){
        setTimeout(addFigures, 333);
    }
}

setTimeout(()=>{
    addFigures();
}, 333);

function findClickedFigure(x,y){
    for(let i=0; i< figures.length; i++){
        const element = figures[i];
        if(element.isPointInside(x,y)){
            return element;
        }
    }
}

//canvas.addEventListener('mousedown', onMouseDown, false);
//canvas.addEventListener('mouseup', onMouseUp, false);
//canvas.addEventListener('mousemove', onMouseMove, false);