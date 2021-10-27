class Game{
    constructor(bird, obstacle){
        this.bird = bird;
        this.obstaculos = obstacle;
        //this.obstaculos.push(obstacle);
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
            let b = document.getElementById("bird");
            let o = document.getElementById("obstacle");
            if (this.hayColision(b, o)){ 
                alert("game over");
            }
        });    
   }

    hayColision(x1, x2) {
        return (x1.offsetLeft < x2.offsetLeft + x2.offsetWidth && x1.offsetTop < x2.offsetTop + x2.offsetHeight &&
        x1.offsetLeft + x1.offsetWidth > x2.offsetLeft && x1.offsetHeight + x1.offsetTop > x2.offsetTop);
    }   


}