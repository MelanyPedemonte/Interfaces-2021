class Obstacle {
    constructor(posicionX, posicionY, posicionX2, posicionY2){ 
        this.div = document.getElementById("obstacle-top");
        this.div2 = document.getElementById("obstacle-bottom");
        this.width = this.div.offsetWidth;
        this.height = this.div.offsetHeight;
        this.width2 = this.div2.offsetWidth;
        this.height2 = this.div2.offsetHeight;
        this.posicionX = this.div.style.left = posicionX + "px";
        this.posicionY = this.div.style.top = posicionY + "px";
        this.posicionX2 = this.div2.style.left = posicionX2 + "px";
        this.posicionY2 = this.div2.style.top = posicionY2 + "px";
        this.divImage = this.div.style.background = "url('./images/Stone.png') left center";
        this.divImage2 = this.div2.style.background = "url('./images/Stone.png') left center";
    }

    hayColision(x1) {
        return ((x1.offsetLeft < this.div.offsetLeft + this.div.offsetWidth && x1.offsetTop < this.div.offsetTop + this.div.offsetHeight &&
        x1.offsetLeft + x1.offsetWidth > this.div.offsetLeft && x1.offsetHeight + x1.offsetTop > this.div.offsetTop) 
        || (x1.offsetLeft < this.div2.offsetLeft + this.div2.offsetWidth && x1.offsetTop < this.div2.offsetTop + this.div2.offsetHeight &&
            x1.offsetLeft + x1.offsetWidth > this.div2.offsetLeft && x1.offsetHeight + x1.offsetTop > this.div2.offsetTop));
    }  

}