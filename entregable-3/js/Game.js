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
                   this.score = this.score + 5;    
                };
            };
            let birdDiv = document.getElementById("bird");
            if (this.obstacle.hayColision(birdDiv)){ 
                this.gameOver();
            };
            if (this.star.hayColision(birdDiv)){ 
                //animacion a la estrella y que desaparece
                let star = document.getElementById("star");
                star.style.display = 'none';
                this.score = this.score + 100;
                setTimeout(_=>this.starModify(star), 2000);
            };
            let puntos= document.getElementById("puntaje");
            puntos.innerHTML = "Score " + this.score;
            if(this.score == 500){
                this.bird.change();

            }
        });  
    } 

    starModify(star){
        star.style.display = 'block'; 
        star.style.top = `${ Math.floor( Math.random() * (70 - 40) + 40 ) }%`;
    }


    gameOver(){
        this.isOver = true;
        if(this.score > 500){
            this.bird.deadPunk();
        }else{
            this.bird.dead();
        }
        let obstacletop = document.getElementById("obstacle-top");
        obstacletop.style.display = "none";
        let obstaclebottom = document.getElementById("obstacle-bottom");
        obstaclebottom.style.display = "none";
        let star = document.getElementById("star");
        star.style.display = 'none';
        let puntos = document.getElementById("score");
        puntos.innerHTML = this.score;
        let game = document.getElementById("gameOver");
        game.style.display = "block";
        let punt = document.getElementById("scorePantalla");
        punt.style.display ="none";
    }
}