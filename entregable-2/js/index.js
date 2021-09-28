"use strict";
//Variables de Canvas
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

//Variables de tablero
let  board = new Image();
board.src = "./images/board/casillero.png";

//Variables de ficha
let tablero;
let pieces =[];
let lastClickedFigure = null;
let isMouseDown = false;

//Variables del juego

//Dibuja el tablero
board.onload = function(){
    let color = "black";
    let tablero = new Board(400, 40, 80, 80, color, ctx, 5);
    tablero.draw();
    let cantFichas = tablero.getPieces();
    addPieces(cantFichas);
}

function addPiece(i, cantFichas) {
    let posX = 0;
    let posY = 0;
    let color
    if (i < (cantFichas/2)) {
        posX = 200;
        posY = 200;
        color = 'jugador1';
    } else {
        posX = 1000;
        posY = 200;
        color = 'jugador2';
    }
    let ficha = new Piece(posX, posY, 33, color, ctx);
    pieces.push(ficha);
}

function addPieces(cantFichas) {
    for (let i = 0; i < cantFichas; i++) {
        addPiece(i, cantFichas);
    }
    drawFigure();
}

function drawFigure() {
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
}

function onMouseMove(e) {
    if (isMouseDown && lastClickedFigure != null) {
        lastClickedFigure.setPosition(e.layerX, e.layerY);
        drawFigure();
    }
}


function findClickedFigure(x, y) {
    if(isMouseDown && lastClickedFigure != null) {
        lastClickedFigure.setPosition(e.layerX, e.layerY);
        drawFigure();
    }
}

canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

