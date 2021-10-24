class Bird {
    constructor(name){
        this.div = document.getElementById("bird");
        this.width = this.div.offsetWidth ; 
        this.height = this.div.offsetHeight; 
        this.life = 100;
        this.score = 1; 
    }

    die(){
        character.classList.add("bird-die");
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
}
