class Game{
    constructor(bird, obstacle){
        this.bird = bird;
        this.obstacle = obstacle;
        this.stars = [];
    }

    initGame(){
        this.acciones();
        this.generateObstacles();
    }

    generateObstacles(){
        let max = 2;
        let quantiy = Math.floor(Math.random() * max);
        for (let index = 0; index < quantiy; index++) {
            let obs = new Obstacle(200, 20);
        }
    }
 
    acciones(){
        document.addEventListener('keydown', (e)=>{
            if(e.code === "Space"){ 
                this.bird.fly();      
            }
          /**   if (this.obstacle.colision(this.bird.getWidth(), this.bird.getHeight())){ 
                this.personaje.die();
                console.log("DIE");
                this.gameover();
            }*/
        });
        
   }

   gameover(){
       alert("game over");
   }

}