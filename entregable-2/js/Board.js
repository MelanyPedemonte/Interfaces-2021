"use strict";
class Board extends Game{
    constructor(posX, posY, width, height, fill, context, cantCol) {
        super(posX, posY, fill, context);
        this.width = width;
        this.height = height;
        this.imageAspectRatio;
        this.imageScaledWidth;
        this.cantCol = cantCol;
    }

    draw(){
        let x = this.getPosX();
        let y = this.getPosY();
        let width = this.getWidth(); 
        let height = this.getHeight();
        for(let i = 0; i < this.cantCol; i++ ){
            for(let j = 0; j < this.cantCol; j++){
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

    getPieces(){
        return this.cantCol * this.cantCol;
    }

    isPointInside(x, y) {

        return false;
    }

    moveInside(x, y) {
        let fil; let col;
        col = Math.trunc((x - this.posX) / (this.imageScaledWidth / this.col));
        fil = Math.trunc((y - this.posY) / (this.width / this.fil));

        return (fil >= 0 && fil < this.fil && col >= 0 && col < this.col);
    }
} 
