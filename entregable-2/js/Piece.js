"use strict";
class Piece extends Game{
    constructor(posX, posY, radius, fill, context) {
        super(posX, posY, fill, context);

        this.radius = radius;
        this.jugador = fill;

    }

    draw() {
        super.draw();
        let img;
        if (this.jugador == 'jugador1') {
            img = document.querySelector('#imgPrincipito');
        } else {
            img = document.querySelector('#imgZorro');
        }

        let imageScaled = this.radius * 2;
        let posy = this.posY - this.radius;
        let posx = this.posX - this.radius;

        this.ctx.drawImage(img, posx, posy, imageScaled, imageScaled);

        this.ctx.beginPath();
        this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);

        if (this.resaltado === true) {
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 5;
            this.ctx.stroke();
        }
        this.ctx.closePath();
    }

    getRadius() {
        return this.radius;
    }

    isPointInside(x, y) {
        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radius;
    }
}