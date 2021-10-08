"use strict";
//Variables de Canvas
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let x,y;
let addficha = false;

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

/*Cuando carga la pagina llama a la funcion addPieces para que dibuje el tablero
y a las fichas */
window.onload = function () {
    addTablero();
    addPieces(cantFichas);
}

function addPieces(cantFichas) {
    for (let i = 0; i < cantFichas; i++) {
        addPiece(i, cantFichas);
    }
   // addTablero();
    drawFigure();
}

function addPiece(i, cantFichas) {
    let posX = 0;
    let posY = 0;
    let color;

    /*Le asigna el lado izquierdo del canvas al jugador 1*/
    if (i < (cantFichas/2)) {
        posX = 200;
        posY = 150;
        color = 'jugador1';
    } else {
        /*Le asigna el lado derecho  del canvas al jugador 2*/
        posX = 1000;
        posY = 150;
        color = 'jugador2';
    }

    let ficha = new Piece(posX, posY, 33, color, ctx);
    pieces.push(ficha);
}

function addTablero() {
    let color = "white";
    x = width/(3)+50;
    y = (Math.trunc(height/6));
    tablero = new Board(x, y, 80, 80, color, ctx, 4);
    pieces.push(tablero);
    tablero.crearMatriz();
}

/*Dibuja las piezas que tiene en arreglo pieces, pero primero limpia el canvas 
con la funcion clearCanvas(), esto lo hacemos para que cada vez que se cambie algo
en el tablero la imagen no quede repetida, por ej, cuando movemos la ficha no quede
el camino de la imagen hasta el punto que lo movemos */
function drawFigure() {
    clearCanvas();
    for (let i = 0; i < pieces.length; i++) {
        pieces[i].draw();
    }
}

/*Creamos esta función en el boton "Dibujar" para que los jugadores puedan cambiar
las dimensiones del tablero en base a la cantidad de columnas que quiere que tenga
el mismo */
function redibujarTablero(){
    /*Los valores del input pueden variar del 4 al 6, en base a eso armamos los if
    para que los tablero queden centrados*/
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

/*Funcion para limpiar el tablero */
function clearCanvas() {
    ctx.fillStyle = '#F8F8FF';
    ctx.fillRect(0, 0, width, height);
};

/*Funciones para el movimiento de las fichas */
function onMouseDown(e) {
    isMouseDown = true;

    if (lastClickedFigure != null) {
        lastClickedFigure.setResaltado(false);
        ultimoJugador = lastClickedFigure.getFill();
        lastClickedFigure = null;
    }

    let clickFig = findClickedFigure(e.layerX, e.layerY);
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
    if(lastClickedFigure != null){
        let columX = addPieceToBoard(e.layerX, e.layerY);
        let columY = verifyColumn(columX, lastClickedFigure);
    };
    console.table(tablero.juego);
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

/*Llamado de los eventos con mouse*/
canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);

function reDraw(){
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0,0, canvas.width, canvas.height); 
    tablero.draw();
    let cantCol = document.querySelector("#number").value;
    addPieces(cantCol);
}

function addPieceToBoard(posX, posY){  
    let cantCol = document.querySelector("#number").value;
    let inicTablero = 481;
    let xTablero = posX - inicTablero;
    let tope = (cantCol) * 80;
    if(posY < inicTablero){
        if(xTablero >= 0 && xTablero <= tope){
            addficha = true;
            return Math.trunc(xTablero / 80);
        }
    }
}             
function verifyColumn(x, ficha){ 
    let cantCol = document.querySelector("#number").value;
    let y = 0;
    if(addficha){
        while(y < cantCol && tablero.juego[x][y] == 0 ){
            y++;
        };
        y--;
        if(y >= 0){
            if (ficha.getFill() == 'jugador1'){
                tablero.juego[x][y] = 1;
            }else{
                tablero.juego[x][y] = 2;
            }
        }
        x = x * 80 + 488;
        y = y * 80 + 121;
        ficha.setPosition(x, y);
        reDraw();
        return ((y-100)/80);
    }
}

