class Star{
    constructor(x, y){ 
        this.div = document.getElementById("star");
        this.width = this.div.offsetWidth;
        this.height = this.div.offsetHeight;
        this.x = this.div.style.left = x + "px";
        this.y = this.div.style.top = y + "px";
        this.divImage = this.div.style.background = "url('./images/star.png') left center";
    }  

    hayColision(x1) {
        return (x1.offsetLeft < this.div.offsetLeft + this.div.offsetWidth && x1.offsetTop < this.div.offsetTop + this.div.offsetHeight &&
        x1.offsetLeft + x1.offsetWidth > this.div.offsetLeft && x1.offsetHeight + x1.offsetTop > this.div.offsetTop);
    }  

    showStar() {
        if ( this.div.style.display !== 'none' ) return
        this.div.style.display = ''
        this.div.style.top = `${ getRandomNumber( 20, 70 ) }%`
    }
}