class Game{
    constructor(bird, obstacle){
        this.bird = bird;
        this.obstacle = obstacle;
        this.isOver = false;
    }

    initGame(){
        this.game();
    }

    game(){
        document.addEventListener('keydown', (e)=>{
            if(!this.isOver){
                if(e.code === "Space"){ 
                   this.bird.fly();      
                };
            };
            let birdDiv = document.getElementById("bird");
            if (this.obstacle.hayColision(birdDiv)){ 
                this.gameOver()
            };
        });    
    } 

    gameOver(){
        this.isOver = true;
        this.bird.dead();
        let obstacle = document.getElementById("obstacle");
        obstacle.style.display = "none";
        let game = document.getElementById("gameOver");
        game.style.display = "block";
    }


}