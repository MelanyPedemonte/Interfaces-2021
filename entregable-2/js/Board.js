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

    crearMatriz(){
        let x = this.getPosX();
        let y = this.getPosY();
        let ancho = 80; 
        let alto = 80;

        for(let i = 0; i <this.cantCol; i++){ //+3 y +2 en los for son para que el tablero se ajuste dependiendo de la cantidad de fichas 
            this.juego[i] = [];
            for(let j = 0; j < this.cantCol; j++){
                this.juego[i][j] = 0;
                y = y + alto; //posicion final de la y se convierte en posicion inicial de la proxima celda en y
            }
            y = this.getPosY(); //reseteo el valor de y a su valor inicial
            x = x + ancho; // posicion final de la x se convierte en posicion inicial de la proxima celda en x
        }
    }

    moveInside(x, y) {
        let fil; let col;
        col = Math.trunc((x - this.posX) / (this.imageScaledWidth / this.col));
        fil = Math.trunc((y - this.posY) / (this.width / this.fil));

        return (fil >= 0 && fil < this.fil && col >= 0 && col < this.col);
    }

    isPointInside(x, y) {
        return false;
    }

    buscar4enLinea() {
        //Buscar horizontalmente
        for (let f = 0; f < this.cantFil; f++) {
            let n1 = 0;
            let n2 = 0;
            for (let c = 0; c < this.cantCol; c++) {
                if (this.juego[f][c] === 0) {
                    n1 = 0;
                    n2 = 0;
                }
                else if (this.juego[f][c] == 1) {
                    n1++;
                    n2 = 0;
                    if (n1 == 4)
                        return 1;
                }
                else if (this.juego[f][c] == 2) {
                    n1 = 0;
                    n2++;
                    if (n2 == 4)
                        return 2;
                }
            }
        }

        //Buscar verticalmente
        for (let c = 0; c < this.cantCol; c++) {
            let n1 = 0;
            let n2 = 0;
            for (let f = this.cantFil - 1; f >= 0; f--) {	
                if (this.juego[f][c] === 0) {
                    break;	
                }
                else if (this.juego[f][c] == 1) {
                    n1++;
                    n2 = 0;
                    if (n1 == 4)
                        return 1;
                }
                else if (this.juego[f][c] == 2) {
                    n1 = 0;
                    n2++;
                    if (n2 == 4)
                        return 2;
                }
            }
        }

        //Buscar en diagonal (de izquierda a derecha)
        for (let i = -(this.cantCol + 4); i < this.cantCol; i++) {
            let n1 = 0;
            let n2 = 0;
            for (let f = 0; f < this.cantFil; f++) {
                let c = i + f;
                if ((c < 0) || (c >= this.cantCol))
                    continue;
                if (this.juego[f][c] == 0) {
                    n1 = 0;
                    n2 = 0;
                }
                else if (this.juego[f][c] == 1) {
                    n1++;
                    n2 = 0;
                    if (n1 == 4)
                        return 1;
                }
                else if (this.juego[f][c] == 2 ) {
                    n1 = 0;
                    n2++;
                    if (n2 == 4)
                        return 2;
                }
            }
        }

        //Buscar en diagonal (de derecha a izquierda)
        for (let i = 0; i < this.cantCol + 4; i++) {
            let n1 = 0;
            let n2 = 0;
            for (let f = 0; f < this.cantFil; f++) {
                let c = i - f;
                if ((c < 0) || (c >= this.cantCol))
                    continue;
                if (this.juego[f][c] == 0 ) {
                    n1 = 0;
                    n2 = 0;
                }
                else if (this.juego[f][c] == 1 ) {
                    n1++;
                    n2 = 0;
                    if (n1 == 4)
                        return 1;
                }
                else if (this.juego[f][c] == 2) {
                    n1 = 0;
                    n2++;
                    if (n2 == 4)
                        return 2;
                }
            }
        }
        return 0;
    }

}
