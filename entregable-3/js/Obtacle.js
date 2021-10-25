class Obstacle {
    constructor(x, y){ 
        this.div1 = document.getElementById("obstacle-top");
        this.div2 = document.getElementById("obstacle-bottom");
        this.width = this.div1.offsetWidth;
        console.log(this.div1.offsetHeight);
        this.height = this.div1.style.height = 100 + "px";
        this.height = this.div2.style.height = 300 + "px";
        this.x = this.div1.style.left = x + "px";
        this.y = this.div1.style.top = 0 + "px";
        this.x = this.div2.style.left = x + "px";
        this.y = this.div2.style.top = 400 + "px";
        this.image = this.div1.style.background = "url('./images/block.png') left center";
        this.image = this.div2.style.background = "url('./images/block.png') left center";
    }

    
    colision(x,y){
        if(x>=this.x && x<=this.x+this.width && y>=this.y && y<=this.y+this.height){
            return true;
        }
        else{
            return false;
        }
    }

}