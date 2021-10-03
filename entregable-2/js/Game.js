class Game {
    constructor(posX, posY, fill, context) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.resaltado = false;
        this.resaltadoEstilo = 'tomato';
        this.ctx = context;
    }

    /*Getters and setters*/
    getFill() {
        return this.fill;
    }

    setFill(fill) {
        this.fill = fill
    }

    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    setPosition(x, y) {
        this.posX = x;
        this.posY = y;
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    /*Dibujo, resaltado y si esta seleccionada la ficha*/
    draw() {
        this.ctx.fillStyle = this.fill;
    }

    setResaltado(resaltado) {
        this.resaltado = resaltado;
    }

    isPointInside(x, y) { };
}