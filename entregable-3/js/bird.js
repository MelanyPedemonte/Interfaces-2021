class Bird {
    constructor(){
        //Lugar de donde arranca el personaje en pos x e y
        this.x = 150;
        this.y = 200;
        //Velocidad
        this.vy = 0;
        //Ancho y alto del personaje
        this.width = 20;
        this.height = 20;
        //La velocidad con la que cae el personaje
        this.weight = 1;
    }

    //Metodo para calcular altura y velocidad
    update(){
        /*Controla que el personaje no pueda bajar mas que el alto del canvas menos 
        el alto del personaje x3 */
        if(this.y > canvas.height - (this.height * 3)){
            this.y = canvas.height - (this.height * 3);
            this.vy = 0;
        }else{
            //Hace que suba el personaje en la velocidad aplicada
            this.vy += this.weight;
            this.y += this.vy;
        }
        //Le pongo un tope hasta donde puede subir
        if(this.y < 0 + this.height){
            this.y = this.height + 0;
        }
        //Cuando suelto baja en lo que indica flap
        if(spacePressed){
            this.flap();
        }
    }

    flap(){
        this.vy -=2;
    }

    draw(){
        ctx.fillStyle = 'pink';
        ctx.fillRect (this.x, this.y, this.width, this.height);
    }
}


