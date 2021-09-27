"use strict";
//Variables de Canvas
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;

//Variables de tablero
let  board = new Image();
board.src = "./images/board/casillero.png";

//Dibuja el tablero
board.onload = function(){
    let color = "white";
    let tablero = new Board(400, 150, 80, 80, color, ctx, 5);
    tablero.draw();
}
