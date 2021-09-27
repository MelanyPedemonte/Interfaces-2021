"use strict";
//Variables de Canvas
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

//Variables de tablero
let  board = new Image();
board.src = "./images/board/casillero.png";

//Variables
let pieces =[];

//Dibuja el tablero
board.onload = function(){
    let color = "white";
    let tablero = new Board(400, 150, 80, 80, color, ctx, 5);
    tablero.draw();
    let cantFichas = tablero.getPieces();
    addPieces(cantFichas);
}

//Agrego las fichas
function addPieces(cantFichas){
    let jugador1 = 0;
    if(jugador1 <= (cantFichas/2)){
        addPieces();
        jugador1 ++;
    }else{
        addPieces2();
    }
    drawFigure();
}

function addPieces(){ 
    let img=new Image(); //iniciar ruta
    img.src="./images/pieces/principito.png";
    let color = "white";
    let p1 = new Piece(30, 150, 33, color, ctx, img);
    pieces.push(p1);
}

function addPieces2(){ 
    let imagen=new Image(); //iniciar ruta
    imagen.src="./images/pieces/zorro.png";
    let color = "white";
    let p2 = new Piece(1000, 150, 23, color, ctx, imagen);
    pieces.push(p2);
}

function drawFigure(){
    clearCanvas();
    for(let i=0; i<pieces.length; i++){
        pieces[i].draw();
    }
}

function clearCanvas(){
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0, 0, width, height);
}
