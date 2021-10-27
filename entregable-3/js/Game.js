class Game{
    constructor(bird, obstacle){
        this.bird = bird;
        this.obstaculos = [];
        this.obstaculos.push(obstacle);
    }

    initGame(){
        this
        this.game();
    }

    game(){
        document.addEventListener('keydown', (e)=>{
            if(e.code === "Space"){ 
                this.bird.fly();      
            }
            if (this.obstaculos[0].colision(this.bird.getPosicionX, this.bird.getPosicionY, this.bird.getWidth, this.bird.getHeight)){ 
                alert("game over");
            }
        });    
   }


}