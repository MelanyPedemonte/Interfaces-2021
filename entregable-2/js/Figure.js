class Figure {
    //Creo el constructor
    constructor(x, y, fill, ctx){
        this.x = x;
        this.y = y;
        this.fill = fill;
        this.ctx = ctx;
        this.resaltado = false;
        this.resaltadoEstilo = 'red'; //Se puede agregar un metodo para cambiar el color
    }

    //Metodos GET && SET
    getPosition(x,y){
        return{
            x : this.getX(),
            y : this.getY()
        };
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    setPosition(x,y){
        this.x = x;
        this.y = y;
    }

    getFill(){
        return this.fill;
    }

    setFill(fill){
        this.fill = fill;
    }

    setResaltado(resaltado){
        this.resaltado =resaltado;
    }

    //Metodos especificos
    draw(){
        this.ctx.fillStyle = this.fill;
    }

    //Metodo Abstracto
    isPointInside(x, y){}
}