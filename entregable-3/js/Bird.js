class Bird {
    constructor(){
        this.div = document.querySelector("#bird");
        this.width = this.div.offsetWidth ; //Compensa el ancho
        this.height = this.div.offsetHeight; //Compensa el alto
        this.life = 100; //??????
        this.score = 1; 
        this.gravity();
    }

    getLife(){
        return this.life;
    }
    
    setLife(life){
        this.life = life;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    gravity() {
        let bird = document.querySelector( '#bird' );
        setInterval(function(){
            //El método getComputedStyle () obtiene todas las propiedades y valores CSS reales (calculados) del elemento especificado.
            //método getComputedStyle () en JavaScript, que obtiene todos los atributos y valores del elemento especificado CSS real (calculado).
            let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
            bird.style.top = (birdTop+3)+"px";
        },15);
    }

    fly(){
        let bird = document.querySelector( '#bird' );
        let jumpCount = 0;
        var jumpInterval = setInterval(function(){
            var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
            if(birdTop>6 && jumpCount<15){
                bird.style.top = (birdTop-5)+"px";
            }
            if(jumpCount > 20){
                clearInterval(jumpInterval)
                //jumping = 0
                jumpCount = 0
            }
            jumpCount++;
        },10);
    }
}
