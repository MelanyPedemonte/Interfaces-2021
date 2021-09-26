"use strict";
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let  board = new Image();
board.src = "casillero.png";

let tablero = new Board(450,80,80,80, 4, ctx,board);

board.onload = function(){
    tablero.draw();
}
