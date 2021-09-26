"use strict";
class Board{
    constructor(posX, posY, width, height, fill, context, board, cantPieces) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.ctx = context;
        this.board = board;
        this.cantPieces = cantPieces;

    }

    draw(){
        let x = this.getPosX();
        let y = this.getPosY();
        let width = this.getWidth(); 
        let height = this.getHeight();
        for(let i = 0; i < this.cantPieces; i++ ){
            for(let j = 0; j < this.cantPieces; j++){
                ctx.beginPath();
                ctx.drawImage(board, x, y);
                ctx.stroke();
                y = y + height;
            }
            y = this.getPosY();
            x = x + width;
        }
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }
} 
