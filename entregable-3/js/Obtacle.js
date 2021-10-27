class Obstacle {
    constructor(posicionX, posicionY){ 
        this.div = document.getElementById("obstacle");
        this.width = this.div.offsetWidth;
        this.height = this.div.offsetHeight;
        this.posicionX = this.div.style.left = posicionX + "px";
        this.posicionY = this.div.style.top = posicionY + "px";
        this.divImage = this.div.style.background = "url('./images/Stone.png') left center";
    }

    colision(birdX, birdY, birdWidth, birdHeight){
        if(birdX < this.posicionX + this.width && birdX + birdWidth > this.posicionX && 
              birdY < this.posicionY + this.height && birdHeight + birdHeight > this.posicionY){
            return true;
        }else{
            return false;
        } 
    }

}