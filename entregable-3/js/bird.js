class Bird {
    constructor(){
        //Lugar de donde arranca el personaje en pos x e y
        this.x = 150;
        this.y = 200;
        //Velocidad
        this.vy = 0;
        //Ancho y alto original de la imagen
        this.originalWidth = 670;
        this.originalHeight = 800;
        //Ancho y alto del personaje
        this.width = this.originalWidth/20;
        this.height = this.originalHeight/10;
        //La velocidad con la que cae el personaje
        this.weight = 1;
        //frames
        this.frameX = 0;
    }

    //Metodo para calcular altura y velocidad
    update(){
        let curve = Math.sin(angle) * 20;
        /*Controla que el personaje no pueda bajar mas que el alto del canvas menos 
        el alto del personaje x3 */
        if(this.y > canvas.height - (this.height * 3) + curve){
            this.y = canvas.height - (this.height * 3) + curve;
            this.vy = 0;
        }else{
            //Hace que suba el personaje en la velocidad aplicada
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        //Le pongo un tope hasta donde puede subir
        if(this.y < 0 + this.height){
            this.y = this.height + 0;
            this.vy = 0;
        }
        //Cuando suelto baja en lo que indica flap
        if(spacePressed){
            this.flap();
        }
    }

    flap(){
        this.vy -=2;
        if(this.frameX >= 3){
            this.frameX = 0;
        }else{
            this.frameX++;
        }
    }

    draw(){
        ctx.fillStyle = '#e17055';
        //ctx.fillRect (this.x, this.y, this.width, this.height);
        ctx.drawImage(pajaro, this.frameX * this.originalWidth, 0, this.originalWidth, this.originalHeight, this.x - 20, this.y - 12, this.width * 1.7, this.height * 1.7);
    }
}


