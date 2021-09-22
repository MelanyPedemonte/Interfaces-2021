class Rect extends Figure{
    //Constructor
    constructor(x, y, width, height, fill, ctx){
        super(x, y, fill, ctx);
        this.width = width;
        this.height = height;
    }

    //Metodos GET && SET
    getWidth(){
        return this.width;
    }

    setWidth(width){
        this.width = width;
    }

    getHeight(){
        return this.height;
    }

    setHeight(height){
        this.height = height;
    }

    //Metodos especificos
    draw(){
        super.draw();
        this.ctx.fillRect(this.x, this.y, this.width, this.height);

        if(this.resaltado == true){
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(this.x, this.y, this.width, this.height);
        }
    }

    //Metodo Abstracto
    isPointInside(x,y){
        return !(x < this.x || x > this.x + this.width || y < this.y || y > this.y + this.height);
    }
}