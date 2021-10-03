"use strict";
//Variables de Canvas
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let x,y;

//Variables de tablero
let  board = new Image();
board.src = "./images/board/casillero.png";

//Variables de ficha
let tablero;
let pieces =[];
let lastClickedFigure = null;
let isMouseDown = false;

//Variables del juego
let ultimoJugador;

//Dibuja el tablero
let cantFichas = 16;

function redibujarTablero(){
    let cantCol = document.querySelector("#number").value;
    if(cantCol == 6){
        let x = 435 - ((cantCol - 4) * 30);
        let y = (Math.trunc(height/cantCol)/2) -30;
        tablero.setPosY(y);
        tablero.setPosX(x);
    }
    if(cantCol == 5){
        let x = 435 - ((cantCol - 4) * 30);
        let y = (Math.trunc(height/cantCol)/2);
        tablero.setPosY(y);
        tablero.setPosX(x);
    }
    if(cantCol == 4){
        let x = width/(3)+50;;
        let y = (Math.trunc(height/6));
        tablero.setPosY(y);
        tablero.setPosX(x);
        
    }
    tablero.setCantCol(cantCol);
    drawFigure();
}

window.onload = function () {
    addPieces(cantFichas);
}

function addTablero() {
    let color = "white";
    x = width/(3)+50;
    y = (Math.trunc(height/6));
    tablero = new Board(x, y, 80, 80, color, ctx, 4);
    pieces.push(tablero);
}


function addPiece(i, cantFichas) {
    let posX = 0;
    let posY = 0;
    let color;
    if (i < (cantFichas/2)) {
        posX = 200;
        posY = 150;
        color = 'jugador1';
    } else {
        posX = 1000;
        posY = 150;
        color = 'jugador2';
    }
    let ficha = new Piece(posX, posY, 33, color, ctx);
    pieces.push(ficha);
}

function addPieces(cantFichas) {
    for (let i = 0; i < cantFichas; i++) {
        addPiece(i, cantFichas);
    }
    addTablero();
    drawFigure();
}

function drawFigure() {
    clearCanvas();
    for (let i = 0; i < pieces.length; i++) {
        pieces[i].draw();
    }
}

function onMouseDown(e) {
    isMouseDown = true;

    if (lastClickedFigure != null) {
        lastClickedFigure.setResaltado(false);
        ultimoJugador = lastClickedFigure.getFill();
        lastClickedFigure = null;
    }

    let clickFig = findClickedFigure(e.layerX, e.layerY); //coordenadas de x e y adentro del canvas
    if (clickFig != null) {
        clickFig.setResaltado(true);
        lastClickedFigure = clickFig;
    }

    drawFigure();
}

function onMouseUp(e) {
    isMouseDown = false;
    let x = e.layerX;
    let y = e.layerY;
    if(tablero.moveInside(x, y) && lastClickedFigure !=null){
        tablero.addPice(lastClickedFigure, e.layerX, e.layerY);
    }
    drawFigure();
}

function onMouseMove(e) {
    if (isMouseDown && lastClickedFigure != null) {
        lastClickedFigure.setPosition(e.layerX, e.layerY);
        drawFigure();
    }
}

function findClickedFigure(x, y) {
    for (let i = 0; i < pieces.length; i++) {
        const p = pieces[i];
        if (p.isPointInside(x, y) && (p.getFill() != ultimoJugador)) {
            return p;
        }
    }
}

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

function clearCanvas() {
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0, 0, width, height);
};