class Circle extends Figure{
    //Constructor
    constructor(x, y, radius, fill, ctx){
        super(x, y, fill, ctx);
        this.radius = radius;
    }

    //Metodos GET && SET
    getRadius(){
        return this.radius;
    }

    setRadius(radius){
        this.radius = radius;
    }

    //Metodo Especifico
    draw(){
        super.draw();
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();

        if(this.resaltado == true){
            this.ctx.strokeStyle = this.resaltadoEstilo;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        }

        this.ctx.closePath();
    }

    //Metodo Abstracto
    isPointInside(x,y){
        let posX = this.x - x;
        let posY = this.y -y;

        //Calcula la distancia entre dos puntos 
        return Math.sqrt(posX * posX + posY *posY) < this.radius;
    }
}