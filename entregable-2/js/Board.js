"use strict";
class Board extends Game{
    constructor(posX, posY, width, height, fill, context, cantCol) {
        super(posX, posY, fill, context);
        this.width = width;
        this.height = height;
        this.imageAspectRatio;
        this.imageScaledWidth;
        this.cantCol = cantCol;
        this.cantFil = cantCol;
        this.juego = [];
        this.iniciarTablero();
    }

    /*Getters and Setters*/ 
    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getPosX(){
        return this.posX;
    }

    setPosX(posX){
        this.posX = posX;
    }

    getPosY(){
        return this.posY;
    }

    setPosY(posY){
        this.posY = posY;
    }

    getPieces(){
        return this.cantCol * this.cantCol;
    }

    setCantCol(cantCol){
        this.cantCol =cantCol;
    }

    /*Dibujamos el tablero con un casillero que se repite*/ 
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

    /*Metodos para incertar la ficha en el tablero, aun no anda*/ 
    iniciarTablero() {
        for (let f = 0; f < this.cantFil; f++) {
            this.juego[f] = ['vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio', 'vacio'];
        }
    }

    moveInside(x, y) {
        let fil; let col;
        col = Math.trunc((x - this.posX) / (this.imageScaledWidth / this.col));
        fil = Math.trunc((y - this.posY) / (this.width / this.fil));

        return (fil >= 0 && fil < this.fil && col >= 0 && col < this.col);
    }

    addPiece(ficha, x, y) {
        let c; let col;

        col = Math.trunc((x - this.posX) / (this.imageScaledWidth / this.cantCol));

        if (col == '0') {
            c = 435;
        } else if (col == '1') {
            c = 515;
        } else if (col == '2') {
            c = 595;
        } else if (col == '3') {
            c = 675;
        } else if (col == '4') {
            c = 755;
        } 

        for (let f = this.cantFil - 1; f >= 0; f--) {
            if (this.juego[f][col] == 'vacio') {
                if (f == '5') {
                    ficha.setPosition(c, 558);
                    this.juego[f][col] = ficha;
                } else if (f == '4') {
                    ficha.setPosition(c, 475);
                    this.juego[f][col] = ficha;
                } else if (f == '3') {
                    ficha.setPosition(c, 392);
                    this.juego[f][col] = ficha;
                } else if (f == '2') {
                    ficha.setPosition(c, 309);
                    this.juego[f][col] = ficha;
                } else if (f == '1') {
                    ficha.setPosition(c, 226);
                    this.juego[f][col] = ficha;
                } else {
                    ficha.setPosition(c, 143);
                    this.juego[f][col] = ficha;
                }
                return;
            }
        }
    }

    isPointInside(x, y) {
        return false;
    }
}
