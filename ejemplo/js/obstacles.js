class Obstacle{
    constructor(){
        this.top = (Math.random() * canvas.height/3) + 50;
        this.bottom = (Math.random() * canvas.height/3) + 50;
        this.x = canvas.width;
        this.width = 50;
        this.color = 'hsla(' + hue + ', 100%, 50%, 0.9)';
        this.counted = false;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, (canvas.height - this.bottom), this.width, this.bottom);
    }

    update(){
        this.x -= gameSpeed;
        if(!this.counted && this.x - bird.x){
            score++;
            this.counted = true;
        }
        this.draw();
    }

    getX() {
        return this.x;
    }

    getWidth() {
        return this.width;
    }

}
