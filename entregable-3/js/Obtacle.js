class Obstacle {
    constructor(posicionX, posicionY){ 
        this.div = document.getElementById("obstacle");
        this.width = this.div.offsetWidth;
        this.height = this.div.offsetHeight;
        this.posicionX = this.div.style.left = posicionX + "px";
        this.posicionY = this.div.style.top = posicionY + "px";
        this.divImage = this.div.style.background = "url('./images/Stone.png') left center";
    }

    hayColision(x1) {
        return (x1.offsetLeft < this.div.offsetLeft + this.div.offsetWidth && x1.offsetTop < this.div.offsetTop + this.div.offsetHeight &&
        x1.offsetLeft + x1.offsetWidth > this.div.offsetLeft && x1.offsetHeight + x1.offsetTop > this.div.offsetTop);
    }  

}