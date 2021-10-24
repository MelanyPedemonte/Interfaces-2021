class Star{
    constructor(x, y){ 
        this.div = document.getElementById("star");
        this.width = this.div.offsetWidth;
        this.height = this.div.offsetHeight;
        this.x = this.div.style.left = x + "px";
        this.y = this.div.style.top = y + "px";
        this.divImage = this.div.style.background = "url('./images/star.png') left center";
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