class Background{
    constructor(image,speedM){
        this.x = 0,
        this.y = 0,
        this.width = 1920,
        this.height = 900,
        this.x2 = this.width,
        this.image = image,
        this.speedM = speedM,
        this.speed = gameSpeed * this.speedM
    }

    update(){
        this.speed = gameSpeed * this.speedM;
        if(this.x <= -this.width){
            this.x = this.width + this.x - this.speed;
        }
        if(this.x2 <= -this.width){
            this.x2 = this.width + this.x2 - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}
