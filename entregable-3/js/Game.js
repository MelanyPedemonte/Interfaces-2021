class Game{
    constructor(bird, obstacle){
        this.bird = bird;
        this.obstaculos = obstacle;
        //this.obstaculos.push(obstacle);
    }

    initGame(){
        this.game();
    }

    game(){
        document.addEventListener('keydown', (e)=>{
            if(e.code === "Space"){ 
                this.bird.fly();      
            }
            let birdDiv = document.getElementById("bird");
            if (this.obstaculos.hayColision(birdDiv)){ 
                alert("game over");
            }
        });    
   } 


}