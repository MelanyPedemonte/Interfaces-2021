class Bird {
    constructor(){
        this.bird = document.querySelector("#bird");
        this.width = this.bird.offsetWidth;
        this.height = this.bird.offsetHeight; 
        this.posicionX = this.bird.offsetLeft; 
        this.posicionY = this.bird.offsetTop; 
        this.gravity();
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getPosicionX(){
        return this.posicionX;
    }
    getPosicionY(){
        return this.posicionY;
    }
    // SETTERS
    setPosicionX(posicionX){
        this.posicionX = posicionX;
    }
    setPosicionY(posicionY){
        this.posicionY = posicionY;
    }

    gravity() {
        setInterval(function(){
            //El método getComputedStyle () obtiene todas las propiedades y valores CSS reales (calculados) del elemento especificado.
            //método getComputedStyle () en JavaScript, que obtiene todos los atributos y valores del elemento especificado CSS real (calculado).
            let birdTop = parseInt(window.getComputedStyle(this.bird).getPropertyValue("top"));
            //this.bird.style.top = (birdTop+3)+"px";
            if(birdTop < 590){
                this.bird.style.top = (birdTop+3)+"px";
            }
        },15);
    }

    //Se modificala propiedad top del div que contiene a Bird.
    fly(){
        let jumpCount = 0;
        var jumpInterval = setInterval(function(){
            var birdTop = parseInt(window.getComputedStyle(this.bird).getPropertyValue("top"));
            if(birdTop>6 && jumpCount<15){
                this.bird.style.top = (birdTop-5)+"px";
            }
            if(jumpCount > 20){
                clearInterval(jumpInterval);
                jumpCount = 0;
            }
            jumpCount++;
        },10);
    }

    dead(){
        this.bird.style.background = "url('./images/birdDie.png') left center";
    }
}
