class Game{
    constructor(bird, obstacle, star){
        this.bird = bird;
        this.obstacle = obstacle;
        this.star = star;
        this.isOver = false;
        this.score=0;
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
                this.gameOver();
            };
            if (this.star.hayColision(birdDiv)){ 
                //animacion a la estrella y que desaparece
                this.score = this.score + 10;
            };
        });    
    } 

    gameOver(){
        this.isOver = true;
        this.bird.dead();
        let obstacle = document.getElementById("obstacle");
        obstacle.style.display = "none";
        let puntos = document.getElementById("score");
        puntos.innerHTML = this.score;
        let game = document.getElementById("gameOver");
        game.style.display = "block";
    }


}